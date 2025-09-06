'use client';

import SwaggerUI from 'swagger-ui-react';
import 'swagger-ui-react/swagger-ui.css';

export default function SwaggerPage() {
    // This fetches the spec you just exposed at /api/openapi
    return <SwaggerUI url="/api/openapi" docExpansion="list" />;
}
