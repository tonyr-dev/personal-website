import { useRouteError } from 'react-router-dom';
import './index.css';

type ErrorType = {
  statusText?: string;
  message?: string;
};

function ErrorPage() {
  const error = useRouteError() as ErrorType;

  return (
    <div id="error-page">
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i>
          {error?.statusText ||
            error?.message ||
            'An unknown error has occurred'}
        </i>
      </p>
    </div>
  );
}

export default ErrorPage;
