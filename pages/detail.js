import React from 'react';
import axios from 'axios';

import Head from 'next/head';
import withAnalytics from '~/hocs/withAnalytics';

const Detail = ({ user }) => (
    <Head>
        <title>{user.login} - Detalhe</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <div>
        <h1>{user.login}</h1>
        <img src={user.avatar_url} width="200" />
    </div>
);

Detail.getInitialProps = async ({ query }) => {
    const response = await axios.get(
        `https://api.github.com/users/${query.user}`
    );

    return { user: response.data };
};

export default withAnalytics()(Detail);