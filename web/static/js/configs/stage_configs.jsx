import StageChangeInfoVoting from "../components/stage_change_info_voting"
import StageChangeInfoIdeaGeneration from "../components/stage_change_info_idea_generation"
import StageChangeInfoClosed from "../components/stage_change_info_closed"

export default {
  "prime-directive": {
    alert: null,
    confirmationMessage: "Has your entire party arrived?",
    nextStage: "idea-generation",
    progressionButton: {
      copy: "Proceed to Idea Generation",
      iconClass: "arrow right",
    },
  },
  "idea-generation": {
    alert: {
      headerText: "Stage Change: Idea Generation!",
      BodyComponent: StageChangeInfoIdeaGeneration,
    },
    confirmationMessage: "Are you sure you would like to proceed to the voting stage?",
    nextStage: "voting",
    progressionButton: {
      copy: "Proceed to Voting",
      iconClass: "arrow right",
    },
  },
  voting: {
    alert: {
      headerText: "Stage Change: Voting!",
      BodyComponent: StageChangeInfoVoting,
    },
    confirmationMessage: "Are you sure you would like to proceed to the action items stage?",
    nextStage: "action-items",
    progressionButton: {
      copy: "Proceed to Action Items",
      iconClass: "arrow right",
    },
  },
  "action-items": {
    alert: null,
    confirmationMessage: "Are you sure you want to distribute this retrospective's action items? This will close the retro.",
    nextStage: "closed",
    progressionButton: {
      copy: "Send Action Items",
      iconClass: "send",
    },
  },
  closed: {
    alert: {
      headerText: "Action Items Distributed",
      BodyComponent: StageChangeInfoClosed,
    },
    confirmationMessage: null,
    nextStage: null,
    progressionButton: null,
  },
}
