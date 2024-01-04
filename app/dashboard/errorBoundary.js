// Approach 1

// "use client"

// import React from 'react'

// export default class ErrorBoundary extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = { hasError: false };
//   }

//   static getDerivedStateFromError(error) {
//     // Update state so the next render will show the fallback UI.
//     return { hasError: true };
//   }

//   componentDidCatch(error, info) {
//     // Example "componentStack":
//     //   in ComponentThatThrows (created by App)
//     //   in ErrorBoundary (created by App)
//     //   in div (created by App)
//     //   in App
//     // logErrorToMyService(error, info.componentStack);
//     console.log({ error, info: info.componentStack })
//   }

//   render() {
//     if (this.state.hasError) {
//       // You can render any custom fallback UI
//       return this.props.fallback;
//     }

//     return this.props.children;
//   }
// }

// Approach 2

"use client"

import React from 'react'

export default class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { error: null, errorInfo: null };
  }

  componentDidCatch(error, errorInfo) {
    // console.log({ error, errorInfo });
    // Catch errors in any components below and re-render with error message
    this.setState({
      error: error,
      errorInfo: errorInfo
    })
    // You can also log error messages to an error reporting service here
  }

  render() {
    if (this.state.errorInfo) {
      // Error path
      return (
        <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white text-center p-4">
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">Something went wrong.</div>
            <details>
              <summary className="text-gray-800 font-bold pt-4">Error Details</summary>
              {this.state.error && <p className="text-gray-700"><strong className='capitalize'>Message: </strong>{this.state.error.message}</p>}
              {this.state.error && <p className="text-gray-700"><strong className='capitalize'>Digest: </strong>{this.state.error.digest}</p>}
            </details>
            {/* <details style={{ whiteSpace: 'pre-wrap' }}>
              {this.state.error && this.state.error.toString()}
              <br />
              {this.state.errorInfo.componentStack}
            </details> */}
          </div>
        </div>
      );
    }
    // Normally, just render children
    return this.props.children;
  }
}