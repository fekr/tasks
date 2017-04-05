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
  [{:id :sample-rule-0 ;;"Mehdi can work 3 minutes with priority 1 on task 1 in order to Eat some bread"
    :optional-steps []
    :rule [:resource-id
           #{:get-value #{"EX"}#{"VVP"}}
           
           ]}])
