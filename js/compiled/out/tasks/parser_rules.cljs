;;    A set of rules for the parser to be used with tasks- the demo website showcasing postagga and milestones.
;;    Copyright (C) 2016 , Rafik NACCACHE <rafik@fekr.tech>

(ns tasks.parser-rules)

;;milestone
#_:milestone-id
#_:task-name
#_:predecessors

;;task
#_:predecessors
#_:resource-id
#_:duration
#_:priority
#_:task-id
#_:task-name

(def rules
  [{:id :milestone ;;milestone 5 : goal reached  when tasks 2, 3 are complete. 
    :optional-steps [:punct :predecessors-end]
    :rule [:milestone-id
           #{#{"NN"}}
           #{:get-value #{"CD"}}

           :punct
           #{#{":"}}
           
           :task-name
           #{:get-value #{"NN"}}
           #{:get-value #{"VVN"}}
           
           :predecessors
           #{#{"WRB"}}
           #{#{"NNS"}}
           #{:get-value :multi #{"CD"}}

           :predecessors-end
           #{#{"VBP"}}
           #{#{"JJ"}}
           ]}])
