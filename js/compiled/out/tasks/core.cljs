;; Tasks - a Wbesite to showcase milestones and postagga in action
;; Copyright (C) 2017 , Rafik NACCACHE <rafik@fekr.tech>
;; Distributed under the MIT License
(ns tasks.core
  (:require [milestones.dyna-scheduler :refer [schedule]]
            [tasks.browser-charts :refer [draw-gantt!]]
            [postagga.parser :refer [parse-tags-rules]]
            [tasks.parser-rules :refer [rules]]
            [postagga.tagger :refer [viterbi]]
            [postagga.en-fn-v-model :refer [en-model]]
            [dommy.core :as dommy :refer-macros [sel1]]
            [goog.dom :as dom]
            [goog.events :as events]))

(def schedule-btn (dom/getElement "schedule"))

(def error-zone (sel1 [:body :#portfolio :#dzone]))

(def pos-tagger (partial viterbi en-model))

(defn sentences
  "A function that takes a paragraph, i.e, a set of tasks declaration
  and spits a vector of sentences"
  [tasks-str]
  ;;TODO - actual detection: regexp in js split by . (point)
  ["milestone 5 : goal reached  when tasks 2, 3 are complete."
   "When task 1, 2, 3 are achieved Rafik can work 3 minutes with priority 4 on task 4 in order to Eat some bread."
   "for task 1 with priority 3 Rafik will have to eat bread in 2 minutes, after  tasks 3, 2, 15."
   "Rafik shall eat bread in 2 minutes, with priority 4, after  task 3,2 and 15."])

(defn tokenizer
  "Given a sentence, yields a vector of tokens"
  [sentence]
  ;;TODO: tokenizer as a regexp in js split by (\s) (space)
  )

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










