import React from 'react'
import Router from 'next/router'
import instance from '../libs/axios'
import { lifecycle, compose, withState } from 'recompose'

import { FlexBox } from '../components/core/style'
const RefContainer = props => (
  <div>
    {props.load ? (
      <FlexBox>loading . . .</FlexBox>
    ) : (
      <div>
        {!props.hasData ? (
          <FlexBox>no data</FlexBox>
        ) : (
          <div>
            <div className="container">
              <div className="row">
                <div className="col-12">
                  {props.data.firstName} {props.data.lastName}
                  {props.data.interviewRef}
                  {props.data.major}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    )}
  </div>
)

export default compose(
  withState('data', 'setData', ''),
  withState('hasData', 'setHasData', false),
  withState('load', 'setLoad', true),
  lifecycle({
    async componentWillMount() {
      console.log(`>${this.props.data}<`)
      let refId = this.props.url.query.id
      if (refId === null || refId === undefined) {
      } else {
        let data = await instance.get('/').then(res => res.data)
        console.log(data)
        let index = data.findIndex(
          e => e.interviewRef.toLowerCase() === refId.toLowerCase()
        )
        if (index > -1) {
          this.props.setData(data[index])
          this.props.setLoad(false)
          this.props.setHasData(true)
        } else {
          //   this.props.setData(data[index])
          this.props.setLoad(false)
        }
      }
    }
  })
)(RefContainer)
