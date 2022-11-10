import NextAuth from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';

const options = {
  secret: process.env.NEXTAUTH_SECRET,
  providers: [
    CredentialsProvider({
      // The name to display on the sign in form (e.g. 'Sign in with...')
      name: 'Credentials',
      // The credentials is used to generate a suitable form on the sign in page.
      // You can specify whatever fields you are expecting to be submitted.
      // e.g. domain, username, password, 2FA token, etc.
      // You can pass any HTML attribute to the <input> tag through the object.
      credentials: {
        username: { label: 'Username', type: 'text', placeholder: 'jsmith' },
        password: { label: 'Password', type: 'password' },
      },
      async authorize(credentials) {
        // You need to provide your own logic here that takes the credentials
        // submitted and returns either a object representing a user or value
        // that is false/null if the credentials are invalid.
        // e.g. return { id: 1, name: 'J Smith', email: 'jsmith@example.com' }
        // You can also use the `req` object to obtain additional parameters
        // (i.e., the request IP address)
        try {
          const res = await fetch('http://localhost:3000/api/login', {
            method: 'POST',
            body: JSON.stringify(credentials),
            headers: { 'Content-Type': 'application/json' },
          });
          const resdata = await res.json();
          const user = resdata[0];

          // If no error and we have user data, return it
          if (credentials) {
            if (
              res.ok &&
              user.username === credentials.username &&
              user.password === credentials.password
            ) {
              return user;
            }
            return null;
          }
          // Return null if user data could not be retrieved
          return null;
        } catch (err) {
          return null;
        }
      },
    }),
  ],
  session: {
    jwt: true,
    maxAge: 30 * 24 * 60 * 60, // 30 days
  },
  debug: true,
  callbacks: {
    async session({ session, token }: any) {
      session.user.id = token.sub;
      return session;
    },
    async redirect({ url, baseUrl }: any) {
      // Allows relative callback URLs
      console.log(url, baseUrl);
      if (url.startsWith('/')) return `${baseUrl}${url}`;
      // Allows callback URLs on the same origin
      else if (new URL(url).origin === baseUrl) return url;
      return baseUrl;
    },
  },
};

export default NextAuth(options);
