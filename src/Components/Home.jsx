export function Home({ user }) {
    return (
      <div>
        <h1>Welcome to the Home Page</h1>
        {user ? (
          <p>Hello, {user.name}! You are logged in.</p>
        ) : (
          <p>
            Please <a href="/login">log in</a> or <a href="/register">register</a> to access more features.
          </p>
        )}
      </div>
    );
  }
  