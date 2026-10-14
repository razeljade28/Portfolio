import { Sparkle, Article, UsersThree, Database, ChatCircleDots, FlowArrow } from '@/components/slab'
import type { Icon } from '@/components/slab'
import { profile } from '@/data/profile'

export type StackStatus = 'Live' | 'Internal' | 'Beta'
export type StackLogo = { src: string; name: string }
export type StackNode = { id:string; name:string; what:string; stack?:string; status?:StackStatus; Icon:Icon; logos?:StackLogo[]; children?:StackNode[] }

const OPENAI = { src:'/icons/openai.svg', name:'ChatGPT' }
const CLAUDE = { src:'/icons/anthropic.svg', name:'Claude' }
const GOOGLE = { src:'/icons/googleworkspace.svg', name:'Google Workspace' }

export const aiStack: StackNode = {
  id:'root', Icon:Sparkle, name:profile.name,
  what:'A practical toolkit for research, editorial production, documentation, and remote team coordination.',
  stack:'Content and operations',
  children:[
    { id:'research', Icon:Article, name:'Research workflow', what:'Finds credible sources and turns complex market developments into a useful article brief.', stack:'ChatGPT · Claude · Google', status:'Internal', logos:[OPENAI,CLAUDE,GOOGLE] },
    { id:'editorial', Icon:FlowArrow, name:'Editorial pipeline', what:'Tracks topics, drafts, reviews, revisions, and publication status without losing context.', stack:'Docs · Sheets · Calendar', status:'Live', logos:[GOOGLE] },
    { id:'team', Icon:UsersThree, name:'Remote team tracker', what:'Keeps assignments, coaching notes, work volume, and performance records in one operating view.', stack:'Sheets · LarkSuite', status:'Live', logos:[GOOGLE] },
    { id:'knowledge', Icon:Database, name:'Process library', what:'Stores repeatable checklists, training notes, and handoff documentation for distributed teams.', stack:'Word · Docs · Drive', status:'Internal', logos:[GOOGLE] },
    { id:'community', Icon:ChatCircleDots, name:'Community reporting', what:'Structures campaign activity and member feedback into concise operational updates.', stack:'Gmail · Sheets', status:'Live', logos:[GOOGLE] },
  ],
}
