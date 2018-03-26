import React, { Component } from 'react'
import './App.css'
import { Query } from 'react-apollo'
import gql from 'graphql-tag'

const QUERY = gql`
  {
    viewer {
      allCourses {
        edges {
          node {
            name
            description
            location
          }
        }
      }
    }
  }
`

class App extends Component {
  render() {
    return (
      <Query query={QUERY}>
        {({ loading, error, data }) => {

          if (loading) return 'Loading...'
          if (error) return `Error! ${error.message}`

          console.log(data.viewer.allCourses.edges)
          return (
            <div>
              {data.viewer.allCourses.edges.map(course => (<div key={course.node.name}>{course.node.name}</div>))}
            </div>
          )
        }}
      </Query>
    )
  }
}

export default App
