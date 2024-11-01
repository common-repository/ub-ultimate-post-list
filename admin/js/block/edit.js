const { __ } = wp.i18n;
const {Fragment, Component} = wp.element;
const {InspectorControls} = wp.editor;
const {ServerSideRender, SelectControl, CheckboxControl, RadioControl, ToggleControl, TextControl, PanelBody} = wp.components;

class postList extends Component{
    constructor(props) {
        super(...props);
        this.state = {
            checkboxPost: false,
            postType: '',
            options: [],
            checkList: []
        }
        this.onPostSelect = this.onPostSelect.bind(this);
        this.onTypeSelect = this.onTypeSelect.bind(this);
    }

    componentDidMount() {
        let optionsArr = [{label: __('Select'), value: ''}];
        wp.apiFetch({path: "/post_type/v1/post_data/"}).then(posts => {
            posts.map(function(post, key) {
                return optionsArr.push({
                    label: __(post.name),
                    value: __(post.value),
                });
            });
            this.setState({options: optionsArr});
        });
    }

    onTypeSelect(postType) {
        const {attributes: {postId, allPages}, setAttributes} = this.props;

        if(postType) {
            let postArr = [];
            wp.apiFetch({path: "/post_type/v1/post_list/?post_type=" + postType}).then(posts => {
                const post = posts.map(function (post, key) {
                    postArr.push({
                        label: __(post.name),
                        value: __(post.value),
                    });
                });
                this.setState({checkboxPost: true});
                setAttributes({checkList: postArr, postType: postType});
            })
        }
        this.setState({postType: ''});
        setAttributes({ postType: ''});
    }

    onPostSelect(e, value){
        const {attributes: {postId}, setAttributes} = this.props;
        let arr2 = [...postId];
        if (e === true) {
            arr2.push( value );
        } else {
            var index = arr2.indexOf(value);
            arr2.splice(index, 1);
        }
        setAttributes({ postId: arr2 });
    }
    render() {
        const { attributes: { postType, postDisplay, options, postId, checkList, postPerPage, postLayout, orderBy, order, displayPostThumbnail, displayPostExcerpt, displayPagination, displayPostDate, displayPostAuthor, displayReadMore }, setAttributes } = this.props;
        return [
            <Fragment>
                <InspectorControls>
                    <PanelBody title={__('Post Type Settings ')}>
                    <SelectControl
                        label="Select Post type"
                        value={ postType }
                        onChange={ this.onTypeSelect }
                        options={ this.state.options }
                    />
                    {(postType && <RadioControl
                        label="Display Posts"
                        selected={ postDisplay }
                        options={ [
                                    { label: 'All', value: 'all' },
                                    { label: 'Selected', value: 'selected' },
                                ] }
                        onChange={ value => setAttributes({postDisplay: value}) }
                    />)}
                    {( postDisplay == 'selected' && postType && checkList ) && checkList.map((item,key) => {
                        return (
                            <CheckboxControl
                                label={item.label}
                                value={item.value}
                                checked={-1 < postId.indexOf(item.value)}
                                onChange={e => this.onPostSelect(e, item.value)}
                            />
                        )
                    })}
                    </PanelBody>
                    <PanelBody title={__('Attribute Settings ')} initialOpen={ false }>
                    {(postType && <RadioControl
                        label="Select Layout"
                        selected={ postLayout }
                        options={ [
                                    { label: 'List', value: 'list' },
                                    { label: 'Grid', value: 'grid' },
                                ] }
                        onChange={ value => setAttributes({postLayout: value}) }
                    />)}
                    {(postType && <RadioControl
                        label="Order By"
                        selected={ orderBy }
                        options={ [
                                    { label: 'Date', value: 'date' },
                                    { label: 'Title', value: 'title' },
                                ] }
                        onChange={ value => setAttributes({orderBy: value}) }
                    />)}
                    {(postType && <RadioControl
                        label="Order"
                        selected={ order }
                        options={ [
                                    { label: 'Asc', value: 'asc' },
                                    { label: 'Desc', value: 'desc' },
                                ] }
                        onChange={ value => setAttributes({order: value}) }
                    />)}
                    {(postType && <TextControl
                        label="Posts Per Page"
                        type="number"
                        value={postPerPage}
                        min="1"
                        max="100"
                        step="1"
                        onChange={(value) => setAttributes({postPerPage: value})}
                    />)}
                    {(postType && <ToggleControl
                        label="Display Post Thumbnail"
                        checked={displayPostThumbnail}
                        onChange={value => setAttributes({displayPostThumbnail: value})}
                        />
                    )}
                    {(postType && <ToggleControl
                        label="Display Post Excerpt"
                        checked={displayPostExcerpt}
                        onChange={value => setAttributes({displayPostExcerpt: value})}
                        />
                    )}
                    {(postType && <ToggleControl
                        label="Display Read More Button"
                        checked={displayReadMore}
                        onChange={value => setAttributes({displayReadMore: value})}
                        />
                    )}
                    {(postType && <ToggleControl
                        label="Display Pagination"
                        checked={displayPagination}
                        onChange={value => setAttributes({displayPagination: value})}
                        />
                    )}
                    {(postType && <ToggleControl
                        label="Display Publish Date"
                        checked={displayPostDate}
                        onChange={value => setAttributes({displayPostDate: value})}
                        />
                    )}
                    {(postType && <ToggleControl
                        label="Display Post Author"
                        checked={displayPostAuthor}
                        onChange={value => setAttributes({displayPostAuthor: value})}
                        />
                    )}
                    </PanelBody>
                </InspectorControls>
            </Fragment>,

            <Fragment>
                <ServerSideRender
                    block="select-post-list/post-list-block"
                    attributes={ { 'postId': postId, 'postDisplay': postDisplay, 'postType': postType, 'postLayout': postLayout, 'orderBy':orderBy, 'order':order, 'postPerPage':postPerPage, 'displayPostThumbnail': displayPostThumbnail, 'displayPagination': displayPagination, 'displayPostExcerpt': displayPostExcerpt, 'displayPostDate': displayPostDate, 'displayPostAuthor': displayPostAuthor, 'displayReadMore': displayReadMore } } />
            </Fragment>
        ]
    }
}

export default postList;