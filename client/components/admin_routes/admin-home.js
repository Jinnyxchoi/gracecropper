import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {default as AddProducts} from './add-products'

/**
 * COMPONENT
 */
export const AdminHome = props => {
  const {email} = props

  return (
    <div>
      <h3>Welcome, {email}</h3>

      <Link to="/allusers">All Users</Link>

      <AddProducts />

      <label>Edit Products</label>
    </div>
  )
}

/**
 * CONTAINER
 */
const mapState = state => {
  return {
    email: state.user.email,
    role: state.user.role
  }
}

export default connect(mapState)(AdminHome)

/**
 * PROP TYPES
 */
AdminHome.propTypes = {
  email: PropTypes.string
}