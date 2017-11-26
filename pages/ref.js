import React from 'react'
import Router from 'next/router'
import instance from '../libs/axios'
import { lifecycle, compose, withState } from 'recompose'
import FacebookProvider, { Share } from 'react-facebook'

import {
  FlexBox,
  Background,
  Col,
  Title2,
  Name,
  Button
} from '../components/core/style'
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
            <Background style={{ minHeight: '100vh' }}>
              <div className="container">
                <div className="row">
                  <Col className="col-12 text-center">
                    <div>
                      <Title2>Congratulation!</Title2>
                      <Name>
                        {props.data.firstName} {props.data.lastName} <br />
                        <div>
                          ติดสัมภาษณ์ทีม&nbsp;
                          <span className="major">{props.data.major}</span>
                        </div>
                        <FacebookProvider appId="1956888527661925">
                          <Share
                            href="http://bassup.tk:3001"
                            quote={`
                          "${props.data.firstName +
                            ' ' +
                            props.data
                              .lastName}" ได้ติดสัมฯ YWC กับเค้าด้วยแหละ อยู่ทีม ${
                              props.data.major
                            } นะ :)
                          `}
                          >
                            <Button
                              type="button"
                              className="btn mt-3 btn-primary"
                            >
                              <i className="fa fa-facebook" /> Share
                            </Button>
                          </Share>
                        </FacebookProvider>
                      </Name>
                    </div>
                  </Col>
                </div>
              </div>
            </Background>
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
      //   console.log(`>${this.props.data}<`)
      let refId = this.props.url.query.id
      if (refId === null || refId === undefined) {
      } else {
        let data = await instance.get('/').then(res => res.data)
        // console.log(data)
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
