import { createAction } from 'redux-actions'
import * as Actions from '../constants/actions'
import {push, replace} from 'react-router-redux'

export const backToMenu = () => replace('/')
