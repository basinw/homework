import React from 'react'
import { Title, Button, Tr, Table } from './core/style'

import styled from 'styled-components'

const Background = styled.div`
  background-image: url('/static/images/img1.png');
  background-size: contain;
`
const Main = props => (
  <Background>
    <div className="container">
      <div className="row">
        <div className="col text-center">
          <Title className="animated infinite pulse">homework</Title>
        </div>
        <div className="col-12">
          <input
            className="form-control form-control-lg"
            type="text"
            placeholder="Search..."
            onChange={props.handleSearch}
            onKeyDown={props.handleKeyDown}
          />
        </div>
      </div>
      <div className="row justify-content-center">
        <div className="col-12 d-sm-flex justify-content-center mt-2">
          <Button
            selectedMajor={props.major}
            major={`content`}
            onClick={() => props.onChangeMajor('content')}
          >
            Content
          </Button>
          <Button
            selectedMajor={props.major}
            major={`design`}
            onClick={() => props.onChangeMajor('design')}
          >
            Design
          </Button>
          <Button
            selectedMajor={props.major}
            major={`marketing`}
            onClick={() => props.onChangeMajor('marketing')}
          >
            Marketing
          </Button>
          <Button
            selectedMajor={props.major}
            major={`programming`}
            onClick={() => props.onChangeMajor('programming')}
          >
            Programming
          </Button>>
        </div>
      </div>

      <div className="row">
        <div className="col-12 col-md-6 mx-auto mt-4">
          <Table className="table table-hover table-dark">
            <thead>
              <Tr>
                <th className="col text-center" colSpan="2" scope="col">
                  Name
                </th>
                <th className="col text-center" scope="col">
                  Ref No.
                </th>
              </Tr>
            </thead>
            <tbody>
              {props.listData.length === 0 ? (
                <tr>
                  <td colSpan="3" className="text-center">
                    <h4>DATA NOT FOUND</h4>
                  </td>
                </tr>
              ) : (
                props.listData.map((d, i) => (
                  <tr key={i} onClick={() => props.redirect(d.interviewRef)}>
                    <td className="text-right">{d.firstName}</td>
                    <td className="">{d.lastName}</td>
                    <td className="text-center">{d.interviewRef}</td>
                  </tr>
                ))
              )}
            </tbody>
          </Table>
        </div>
      </div>
    </div>
  </Background>
)

export default Main
