// In this file, all Page components from 'src/pages` are auto-imported. Nested
// directories are supported, and should be uppercase. Each subdirectory will be
// prepended onto the component name.
//
// Examples:
//
// 'src/pages/HomePage/HomePage.js'         -> HomePage
// 'src/pages/Admin/BooksPage/BooksPage.js' -> AdminBooksPage

import { Router, Route, Set } from '@redwoodjs/router'
import PurpleTreeLayout from './layouts/PurpleTreesLayout/PurpleTreesLayout'

const Routes = () => {
  return (
    <Router>
      <Set wrap={PurpleTreeLayout}>
        <Route path="/" page={HomePage} name="home" />
      </Set>
      <Route path="/stripe-demo" page={StripeDemoPage} name="stripeDemo" />
      <Route notfound page={NotFoundPage} />
    </Router>
  )
}

export default Routes
