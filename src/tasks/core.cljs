;; Tasks - a Wbesite to showcase milestones and postagga in action
;; Copyright (C) 2017 , Rafik NACCACHE <rafik@fekr.tech>
;; Distributed under the MIT License
(ns tasks.core
  (:require [milestones.dyna-scheduler :refer [schedule]]
            [tasks.browser-charts :refer [draw-gantt!]]
            [postagga.parser :refer [parse-tags-rules]]
            [tasks.parser-rules :refer [rules]]
            [postagga.tools :as tools]
            [postagga.tagger :refer [viterbi patch-w-entity]]
            [postagga.trie :as trie]
            [postagga.en-fn-v-model :refer [en-model]]
            [postagga.en-tr-names :as tr-names]
            [dommy.core :as dommy :refer-macros [sel1]]
            [goog.dom :as dom]
            [goog.events :as events]))

(def schedule-btn (dom/getElement "schedule"))

(def error-zone (sel1 [:body :#portfolio :#dzone]))

(def pos-tagger
  #(patch-w-entity  0.7 % tr-names/en-names-trie
                    (viterbi en-model % )
                    "NP"))



(defn split-sep
  [sep str]
  (as-> str t
    (.split t (js/RegExp. sep))
    (js->clj t)
    (filter (comp not empty?) t)
    (into [] t)))

(def sentences (partial split-sep "\\."))

(def tokenizer (comp (partial mapv #(.toLowerCase %)) (partial split-sep "\\s|\\r|\\n|\\,|\\;|\\:")))
 
(defn schedule-and-show!
  [schedule-start
   default-duration-unit
   in-div-id]
  (let [tasks-str (.-value (.getElementById  js/document "default-template"))
        tasks-sentences (sentences tasks-str)
        tasks  (->> tasks-sentences
                    (map (partial parse-tags-rules
                                  tokenizer
                                  pos-tagger
                                  rules)))
        scheduled (schedule tasks [:priority])]

    (if-let [err (get scheduled :errors)]
      (do
        (.error js/console err )
        (-> error-zone
            (dommy/set-text! "Couldn't schedule... plz retry !")
            (dommy/add-class! :alert-danger)))
            
      (do
        (-> error-zone
            (dommy/set-text! "Successfully scheduled!")
            (dommy/remove-class! :alert-danger)
            (dommy/add-class! :alert-success))
        
        (draw-gantt!
         (:result scheduled)
         schedule-start
         default-duration-unit
         in-div-id)))))

(events/listen schedule-btn "click" #(schedule-and-show! (.format  (js/moment))
                                                         "hours"
                                                         "gantt-chart"))










