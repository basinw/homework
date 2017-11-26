import { compose, withState, withHandlers, lifecycle } from 'recompose'
import instance from '../libs/axios'
import IndexContainer from './main'
import Router from 'next/router'

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
      let { data } = await instance.get('/')
      let current_data = data.filter(d => d.major === this.props.major)
      this.props.setAllData(data)
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
      let result = ''
      if (key.length === 0) {
        result = props.allData.filter(d => d.major === props.major)
      } else {
        result = props.allData.filter(
          d =>
            d.firstName.indexOf(key) > -1 ||
            d.interviewRef.indexOf(key) > -1 ||
            d.lastName.indexOf(key) > -1
        )
      }
      props.setListData(result)
    },
    handleKeyDown: props => e => {
      if (e.key === 'Escape') {
        e.target.value = ''
        let rs = props.allData.filter(data => data.major === props.major)
        rs.sort((a, b) => compare(a, b, 'interviewRef'))
        props.setListData(rs)
      }
    },
    redirect: props => e => {
      Router.push(`/ref/${e}`)
    }
  })
)(IndexContainer)

export default IndexCompose
