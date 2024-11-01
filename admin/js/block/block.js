const { __ } = wp.i18n;
const { registerBlockType } = wp.blocks;

import postList from './edit';

registerBlockType( 'select-post-list/post-list-block', {
    title: __('Ultimate Post List'),
    icon: 'list-view',
    category: 'common',
    attributes: {
        postDisplay: {
            type: "string",
            default: 'all'
        },
        posts: {
            type: "array",
            default: []
        },
        checkList:{
            type: "array",
            default: []
        },
        postType: {
            type: "string",
            default: ''
        },
        postLayout: {
            type: "string",
            default: 'list'
        },
        orderBy: {
            type: "string",
            default: 'date'
        },
        order: {
            type: "string",
            default: 'desc'
        },
        postId: {
            type: "array",
            default: []
        },
        postPerPage: {
            type: 'string',
            default: 12
        },
        displayPostThumbnail: {
            type: "boolean",
            default: true
        },
        displayPostExcerpt: {
            type: "boolean",
            default: true
        },
        displayPostDate: {
            type: "boolean",
            default: true
        },
        displayPagination: {
            type: "boolean",
            default: true
        },
        displayPostAuthor: {
            type: "boolean",
            default: true
        },
        displayReadMore: {
            type: "boolean",
            default: false
        }
    },

    edit: postList,

    save(props) {
        const { attributes: { postDisplay, postType, postId, posts, displayReadMore, postPerPage }, setAttributes }	 = props;
        return null;
    },
} );
