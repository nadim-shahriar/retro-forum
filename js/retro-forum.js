const loadData = async (searchText = '') => {

    if (searchText.length > 0) {
        url = (`https://openapi.programming-hero.com/api/retro-forum/posts?category=${searchText}`)

    }
    else {
        url = (`https://openapi.programming-hero.com/api/retro-forum/posts`)

    }
    try {
        const res = await fetch(url);
        if (!res.ok) {
            throw new Error('Failed to fetch data');
        }
        const data = await res.json();
        const posts = data.posts;
        console.log(posts)
        
        displayPosts(posts);
        
    } 
    catch (error) {
        console.error('Error loading posts:', error);
    }
}
setTimeout(() =>{
    loadData()
}, 2000)


let count = 0;
const displayPosts = (posts) => {


    const cardContainer = document.getElementById("card-container")

    cardContainer.textContent = ''
    toggleLoadingSpinner(true)
    posts.forEach(post => {
        console.log(post)

        const postCard = document.createElement('div')
        postCard.classList = `flex gap-3 bg-[#797DFC1A]  p-10 rounded-3xl shadow-2xl`
        postCard.innerHTML = `
            <div id="card-status" class="w-[72px] h-[72px]">
             <img class=" rounded-full" src="${post.image}" />
             
            </div>
            <div class="h-5 w-5 lg:m-0 text-center m-auto ${post?.isActive ? "bg-[#10B981]" : "bg-red-600"} relative rounded-full right-8 border-gray-200 border-2"></div>

            <div class="flex flex-col flex-1 gap-4">
                <div class="flex gap-5">
                    <p># <span>${post.category}</span></p>
                    <p>Author : <span>${post.author.name}</span></p>
                </div>
                <h5 class="font-bold text-xl text-black">${post.title}</h5>
                <p class="text-[#797DFC]"> ${post.description}</p>
                <hr class="border-dashed border-black">
                <div class="flex justify-between">
                    <div class="flex gap-6">
                            <div class="flex gap-3">
                                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28"
                                            viewBox="0 0 28 28" fill="none">
                                            <path
                                                d="M9.33333 10.5H18.6667M9.33333 15.1666H16.3333M10.5 21H7C6.07174 21 5.1815 20.6312 4.52513 19.9748C3.86875 19.3185 3.5 18.4282 3.5 17.5V8.16663C3.5 7.23837 3.86875 6.34813 4.52513 5.69175C5.1815 5.03538 6.07174 4.66663 7 4.66663H21C21.9283 4.66663 22.8185 5.03538 23.4749 5.69175C24.1313 6.34813 24.5 7.23837 24.5 8.16663V17.5C24.5 18.4282 24.1313 19.3185 23.4749 19.9748C22.8185 20.6312 21.9283 21 21 21H17.5L14 24.5L10.5 21Z"
                                                stroke="#12132D" stroke-opacity="0.6" stroke-width="1.5"
                                                stroke-linecap="round" stroke-linejoin="round" />
                                </svg>
                                <p> ${post.comment_count
            }</p>
                            </div>
                            <div class="flex gap-3">
                                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28"
                                            viewBox="0 0 28 28" fill="none">
                                            <path
                                                d="M11.6667 14C11.6667 14.6188 11.9125 15.2123 12.3501 15.6499C12.7877 16.0875 13.3812 16.3333 14 16.3333C14.6188 16.3333 15.2123 16.0875 15.6499 15.6499C16.0875 15.2123 16.3333 14.6188 16.3333 14C16.3333 13.3812 16.0875 12.7877 15.6499 12.3501C15.2123 11.9125 14.6188 11.6667 14 11.6667C13.3812 11.6667 12.7877 11.9125 12.3501 12.3501C11.9125 12.7877 11.6667 13.3812 11.6667 14Z"
                                                stroke="#12132D" stroke-opacity="0.6" stroke-width="1.5"
                                                stroke-linecap="round" stroke-linejoin="round" />
                                            <path
                                                d="M24.5 14C21.7 18.6667 18.2 21 14 21C9.8 21 6.3 18.6667 3.5 14C6.3 9.33333 9.8 7 14 7C18.2 7 21.7 9.33333 24.5 14Z"
                                                stroke="#12132D" stroke-opacity="0.6" stroke-width="1.5"
                                                stroke-linecap="round" stroke-linejoin="round" />
                                </svg>
                                        <p> ${post.view_count
            }</p>
                                </div>
                                <div class="flex gap-3">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28"
                                            viewBox="0 0 28 28" fill="none">
                                            <path
                                                d="M9.91667 14H14V8.16667M3.5 14C3.5 15.3789 3.77159 16.7443 4.29926 18.0182C4.82694 19.2921 5.60036 20.4496 6.57538 21.4246C7.55039 22.3996 8.70791 23.1731 9.98182 23.7007C11.2557 24.2284 12.6211 24.5 14 24.5C15.3789 24.5 16.7443 24.2284 18.0182 23.7007C19.2921 23.1731 20.4496 22.3996 21.4246 21.4246C22.3996 20.4496 23.1731 19.2921 23.7007 18.0182C24.2284 16.7443 24.5 15.3789 24.5 14C24.5 12.6211 24.2284 11.2557 23.7007 9.98182C23.1731 8.70791 22.3996 7.55039 21.4246 6.57538C20.4496 5.60036 19.2921 4.82694 18.0182 4.29927C16.7443 3.77159 15.3789 3.5 14 3.5C12.6211 3.5 11.2557 3.77159 9.98182 4.29927C8.70791 4.82694 7.55039 5.60036 6.57538 6.57538C5.60036 7.55039 4.82694 8.70791 4.29926 9.98182C3.77159 11.2557 3.5 12.6211 3.5 14Z"
                                                stroke="#12132D" stroke-opacity="0.6" stroke-width="1.5"
                                                stroke-linecap="round" stroke-linejoin="round" />
                                </svg>
                                <p> ${post.posted_time} min</p>
                            </div>
                        </div>
                        <button onclick='markAsRead("${post.title.replace("'", "")}--${post.view_count}")' class="mark-as-read-btn">
                            <img src="images/email 1.svg" alt="">
                        </button>
                    </div>
                </div>
        `
        cardContainer.appendChild(postCard)
        toggleLoadingSpinner(false)
    });
}

const markAsRead = (value) => {
    const convertToArray = value.split("--")
    const [title, view_count] = convertToArray

    const titleContainer = document.getElementById("title-container")
    // console.log(titleContainer)
    
    const div = document.createElement('div')
    div.classList = `bg-white m-6 p-4 rounded-xl flex justify-between items-center gap-2`;

    div.innerHTML = `
        <p class="font-bold"> ${title}</p>
        <div class="flex gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 28 28" fill="none">
                            <path
                                d="M11.6667 14C11.6667 14.6188 11.9125 15.2123 12.3501 15.6499C12.7877 16.0875 13.3812 16.3333 14 16.3333C14.6188 16.3333 15.2123 16.0875 15.6499 15.6499C16.0875 15.2123 16.3333 14.6188 16.3333 14C16.3333 13.3812 16.0875 12.7877 15.6499 12.3501C15.2123 11.9125 14.6188 11.6667 14 11.6667C13.3812 11.6667 12.7877 11.9125 12.3501 12.3501C11.9125 12.7877 11.6667 13.3812 11.6667 14Z"
                                stroke="#12132D" stroke-opacity="0.6" stroke-width="1.5" stroke-linecap="round"
                                stroke-linejoin="round" />
                            <path
                                d="M24.5 14C21.7 18.6667 18.2 21 14 21C9.8 21 6.3 18.6667 3.5 14C6.3 9.33333 9.8 7 14 7C18.2 7 21.7 9.33333 24.5 14Z"
                                stroke="#12132D" stroke-opacity="0.6" stroke-width="1.5" stroke-linecap="round"
                                stroke-linejoin="round" />
                        </svg>
                        <p>${view_count}</p>
        </div>
    `
    count++;
    const markAsReadCount = document.getElementById('mark-as-read-count')
    markAsReadCount.innerText = count;
    titleContainer.appendChild(div)
}

const toggleLoadingSpinner = (isLoading) =>{
    const loadingSpinner = document.getElementById('loading-spinner')
    if(isLoading){
        loadingSpinner.classList.remove('hidden')
    }
    else{
        loadingSpinner.classList.add('hidden')
    }
}

const handleSearch = () => {
    toggleLoadingSpinner(true)
    const searchField = document.getElementById("search-field")
    const searchText = searchField.value
    loadData(searchText)
    console.log(searchText)

}
toggleLoadingSpinner(true)

const loadLatestPostData = async()=>{
    const res = await fetch(`https://openapi.programming-hero.com/api/retro-forum/latest-posts`)
    const data = await res.json()
    displayLatestPost(data)

}

const displayLatestPost = (latestPosts) =>{

    const latestPostContainer = document.getElementById('latest-post-container')

    latestPosts.forEach(latestPost =>{
        console.log(latestPost)

        const div = document.createElement('div')
        div.classList = `card bg-base-100 shadow-2xl`

        div.innerHTML= `
            <figure class="px-6 pt-6">
                        <img class="rounded-2xl" src="${latestPost.cover_image}" />
                    </figure>

                    <div class="px-6 mb-6 flex flex-col gap-5">
                        <div class="flex gap-3 pt-5">
                            <img src="images/Frame.svg" alt="">
                            <p class="text-[#12132D99]">${latestPost?.author?.posted_date || 'No publish date'}</p>
                        </div>

                        <p class="font-bold text-lg">${latestPost.title}</p>

                        <p class="text-[#12132D99]">${latestPost.description}</p>

                        <div class="flex gap-4">
                            <div >
                                <img class="w-[48px] h-[48px] rounded-full" src="${latestPost.profile_image}" alt="">
                            </div>                
                            <div>
                                <h5 class="font-bold">${latestPost?.author?.name || 'নাম নাই'}</h5>
                                <p class="text-[#12132D99]">${latestPost?.author?.designation || "unknown"}</p>
                            </div>
                        </div>
                    </div>
        `
        latestPostContainer.appendChild(div)
    })
}

loadLatestPostData()