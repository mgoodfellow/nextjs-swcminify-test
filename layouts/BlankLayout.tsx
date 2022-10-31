import Head from 'next/head';
import React, { ReactElement } from 'react';

import { WithApp } from './WithApp';

export const getBlankLayout = (page: ReactElement) =>
    WithApp(
        <>
            <Head>
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1.0"
                    key="viewport"
                />
            </Head>
            {page}
        </>,
    );
