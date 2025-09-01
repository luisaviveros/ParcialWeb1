//poner todos los componentes acaaa tu puedeeees!!!!


import { useEffect, useMemo, useState } from 'react'
import SearchBar from './components/SearchBar.jsx'
import ResultsList from './components/ResultsList.jsx'
import ReadingList from './components/ReadingList.jsx'
import { loadList, saveList } from './utils/storage.js'


export default function App() {
const [results, setResults] = useState([])
const [status, setStatus] = useState({ loading: false, error: '' })
const [list, setList] = useState(() => loadList())
}
