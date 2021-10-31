import React from 'react';

const Blogs = () => {
    const blogs = [
        {
            title: 'The Most Beautiful Place In The World',
            date: '20 September 2021',
            comments: '4',
            img: 'https://i.ibb.co/mNgXgNh/blog-3.jpg',
        },
        {
            title: 'How to shoot videos of  The Most Beautiful Places',
            date: '5 September 2021',
            comments: '3',
            img: 'https://i.ibb.co/MG4Hxsr/blog-2.jpg',
        },
        {
            title: 'Basic safety rules during the travelling',
            date: '20 October 2021',
            comments: '2',
            img: 'https://i.ibb.co/mNgXgNh/blog-3.jpg',
        }
    ]
    return (
        <div className='my-20 md:container mx-auto'>
            <div className='App'>
                <h5 className='text-tomato text-xl py-2'>Latest Blog Posts</h5>
                <h2 className='text-4xl font-medium  App sm:w-full md:w-1/2  mx-auto'>Our Latest Article<br />For Travellers</h2>
            </div>

            <div className='md:w-3/4 md:mx-auto mt-10 grid grid-cols-1 md:grid-cols-3 gap-12 '>
                {
                    blogs.map(blog => <div key={blog.img} className='shadow-lg'>
                        <img src={blog.img} alt="" />
                        <div className=' p-5'>
                            <h4 className='text-lg'>{blog.title}</h4>
                            <div className='flex justify-between mt-4 text-sm'>
                                <p><i className="fas text-tomato pr-2 fa-calendar-alt"></i>{blog.date}</p>
                                <p><i className="fas pr-2 text-tomato fa-comment-alt"></i>{blog.comments} comments</p>
                            </div>

                        </div>
                    </div >)
                }
            </div>
        </div>
    );
};

export default Blogs;
