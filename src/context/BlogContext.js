import createDataContext from './createDataContext';


const init_blogs = [
    {
        id: 1,
        title: 'Blog#1',
        description: 'Random Desc for Blog#1'
    },
    {
        id: 2,
        title: 'Blog#2',
        description: 'Random Desc for Blog#2'
    }
];

const blogReducer = (state, action) => {
    console.log('--------------------', action);
    let blogId = action.payload.id;
    let newBlog = action.payload.data;
    switch (action.type) {
        case 'Create':
            return [...state, { id: state.length + 1, title: newBlog.title, description: newBlog.description }];
        case 'Retrieve':
            return [...state.filter(b => b.id === blogId)];
        case 'Retrieve-All':
            return [...state];
        case 'Update':
            return [...state.filter(b => b.id !== blogId), ...blogData];
        case 'Remove':
            return [...state.filter(b => b.id !== blogId)];
        case 'Remove-All':
            return [];
        default:
            return [...state]
    }
};

export const { Context, Provider } =
    createDataContext(blogReducer,
        {
            addBlog: (dispatchFn) => {
                return (blogData) => dispatchFn({ type: 'Create', payload: { data: blogData } });
            },
            getAllBlogs: (dispatchFn) => {
                return () => dispatchFn({ type: 'Retrieve-All', payload: {} });
            },
            getBlog: (dispatchFn) => {
                return (blogId) => dispatchFn({ type: 'Retrieve', payload: { id: blogId } });
            },
            updateBlog: (dispatchFn) => {
                return (blogId, blogData) => dispatchFn({ type: 'Retrieve', payload: { id: blogId, data: blogData } });
            },
            removeAllBlogs: (dispatchFn) => {
                return () => dispatchFn({ type: 'Remove-All', payload: {} });
            },
            removeBlog: (dispatchFn) => {
                return (blogId) => dispatchFn({ type: 'Remove', payload: { id: blogId } })
            }
        },
        init_blogs);
