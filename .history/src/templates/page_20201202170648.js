import React, { Component } from 'react';
import Layout from '../components/layout';

export default class PageTemplate extends Component {
    render() {
        return (
            <Layout>
            <div>
                <h1>{this.props.data.page.title}</h1>
                <div dangerouslySetInnerHTML={{ __html: this.props.data.page.content }} />
            </div>
            </Layout>
        );
    }
}

export const query = graphql`
    query currentPage($id: String!) {
        page: wordpressPage(id: { eq: $id }) {
            title
            content
        }
    }
    
`