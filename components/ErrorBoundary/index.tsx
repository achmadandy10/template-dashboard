import { Component, PropsWithChildren } from 'react';

interface ErrorBoundaryState {
  hasError: boolean;
}

export class ErrorBoundary extends Component<
  PropsWithChildren<object>,
  ErrorBoundaryState
> {
  constructor(props: PropsWithChildren<object>) {
    super(props);

    // Define a state variable to track whether is an error or not
    this.state = { hasError: false };
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  static getDerivedStateFromError(_: Error): ErrorBoundaryState {
    // Update state so the next render will show the fallback UI

    return { hasError: true };
  }

  componentDidCatch(error: Error, errorInfo: unknown) {
    // You can use your own error logging service here
    console.log({ error, errorInfo });
  }

  render() {
    // Check if the error is thrown
    if (this.state.hasError) {
      // You can render any custom fallback UI
      return (
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: '100%',
            height: '100vh',
            flexDirection: 'column',
          }}
        >
          <h2
            style={{
              textAlign: 'center',
              fontWeight: 'bold',
              fontSize: '2.8em',
              marginBottom: '20px',
            }}
          >
            Oops, there was an error!
          </h2>
          <button
            type="button"
            onClick={() => this.setState({ hasError: false })}
            style={{
              fontSize: '1.8em',
            }}
          >
            Try again?
          </button>
        </div>
      );
    }

    // Return children components in case of no error

    return this.props?.children;
  }
}
