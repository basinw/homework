import { compose, withState, withHandlers, lifecycle } from 'recompose'
import instance from '../libs/axios'
import IndexContainer from './main'

const compare = (a, b, c) => {
  let A = a[c],
    B = b[c]
  if (A < B) return -1
  if (A > B) return 1
  return 0
}

const IndexCompose = compose(
  withState('sortBy', 'setSort', 'major'),
  withState('orderBy', 'setOrder', 'asc'),
  withState('major', 'setMajor', 'content'),
  withState('allData', 'setAllData', []),
  withState('listData', 'setListData', []),
  lifecycle({
    async componentWillMount() {
      let ywc_data = await instance.get('/').then(res => res.data)
      let current_data = ywc_data.filter(d => d.major === this.props.major)
      this.props.setAllData(ywc_data)
      current_data.sort((a, b) => compare(a, b, 'interviewRef'))
      this.props.setListData(current_data)
    }
  }),
  withHandlers({
    onSelect: props => id => {},
    onChangeMajor: props => e => {
      let result = props.allData.filter(d => e === d.major)
      result.sort((a, b) => compare(a, b, 'interviewRef'))
      props.setListData(result)
      props.setMajor(e)
    },
    handleSearch: props => e => {
      let key = e.target.value
      key = key.toUpperCase()
      console.log(key)
      let result = ''
      if (key.length === 0) {
        result = props.allData.filter(d => d.major === props.major)
        console.log('if')
      } else {
        console.log(props.allData)
        result = props.allData.filter(
          d =>
            d.firstName.indexOf(key) > -1 ||
            d.interviewRef.indexOf(key) > -1 ||
            d.lastName.indexOf(key) > -1
        )
        console.log('else')
      }
      console.log(result)
      props.setListData(result)
    },
    handleKeyDown: props => e => {
      console.log(e.key)
      if (e.key === 'Escape') {
        e.target.value = ''
        let rs = props.allData.filter(data => data.major === props.major)
        rs.sort((a, b) => compare(a, b, 'interviewRef'))
        props.setListData(rs)
      }
    }
  })
)(IndexContainer)

export default IndexCompose
