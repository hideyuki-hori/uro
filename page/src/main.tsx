/* @refresh reload */
import { render } from 'solid-js/web'
import { App } from '~/app'
import './globals.css'

const root = document.getElementById('root')

if (!(root instanceof HTMLElement)) throw new Error()

render(() => <App />, root)
