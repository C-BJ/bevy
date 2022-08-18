window.SIDEBAR_ITEMS = {"derive":[["AmbiguitySetLabel","Generates an impl of the `AmbiguitySetLabel` trait."],["RunCriteriaLabel","Generates an impl of the `RunCriteriaLabel` trait."],["StageLabel","Generates an impl of the `StageLabel` trait."],["SystemLabel","Generates an impl of the `SystemLabel` trait."]],"enum":[["RunCriteriaDescriptorOrLabel",""],["ShouldRun","Determines whether a system should be executed or not, and how many times it should be ran each time the stage is executed."],["StateError",""],["SystemDescriptor","Encapsulates a system and information on when it run in a `SystemStage`."]],"mod":[["graph_utils",""]],"struct":[["AmbiguitySetLabelId","Strongly-typed identifier for an [`AmbiguitySetLabel`]."],["ExclusiveSystemDescriptor","Encapsulates an exclusive system and information on when it runs in a `SystemStage`."],["ParallelExecutor",""],["ParallelSystemContainer",""],["ParallelSystemDescriptor","Encapsulates a parallel system and information on when it runs in a `SystemStage`."],["ReportExecutionOrderAmbiguities","When this resource is present in the `App`’s `Resources`, each `SystemStage` will log a report containing pairs of systems with ambiguous execution order."],["RunCriteria",""],["RunCriteriaDescriptor",""],["RunCriteriaLabelId","Strongly-typed identifier for a [`RunCriteriaLabel`]."],["Schedule","A container of [`Stage`]s set to be run in a linear order."],["SingleThreadedExecutor",""],["StageLabelId","Strongly-typed identifier for a [`StageLabel`]."],["State","Stack based state machine"],["SystemLabelId","Strongly-typed identifier for a [`SystemLabel`]."],["SystemSet","A builder for describing several systems at the same time."],["SystemStage","Stores and executes systems. Execution order is not defined unless explicitly specified; see `SystemDescriptor` documentation."]],"trait":[["AmbiguitySetLabel","A strongly-typed class of labels used to identify sets of systems with intentionally ambiguous execution order."],["ExclusiveSystemDescriptorCoercion",""],["GraphNode",""],["IntoRunCriteria",""],["IntoSystemDescriptor",""],["ParallelSystemDescriptorCoercion",""],["ParallelSystemExecutor",""],["RunCriteriaDescriptorCoercion",""],["RunCriteriaLabel","A strongly-typed class of labels used to identify run criteria."],["Stage","A type that can run as a step of a `Schedule`."],["StageLabel","A strongly-typed class of labels used to identify `Stage`s."],["StateData",""],["SystemContainer","System metadata like its name, labels, order requirements and component access."],["SystemLabel","A strongly-typed class of labels used to identify `System`s."]]};