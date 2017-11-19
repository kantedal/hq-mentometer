/** TodoMVC model definitions **/

declare interface TodoItemData {
  id?: TodoItemId;
  text?: string;
  completed?: boolean;
}

declare type TodoItemId = number;

declare type TodoFilterType = 'SHOW_ALL' | 'SHOW_ACTIVE' | 'SHOW_COMPLETED';

declare type TodoStoreState = TodoItemData[];

declare interface IVoteStatistics {
  voteA: number
  voteB: number
  voteC: number
  userVotes: string[]
}


declare interface HostState {
  hostStep: number
  connectedClients: number
  serverId: string
}

declare interface MentometerState {
  mentometerStep: number
  serverId: string
  failMessage: string
  sessionEnded: boolean
  activeVote: boolean
  connectedClients: number
}

declare interface VoteState {
  userHasVoted: boolean
  voteStatistics: IVoteStatistics
}