const loadData = async() =>{
    const res = await fetch('https://openapi.programming-hero.com/api/retro-forum/posts')
    const data = await res.json()
    const posts = data.posts
    displayPosts(posts)
}
loadData()
const displayPosts = (posts) =>{

    const cardContainer = document.getElementById("card-container")
    

    posts.forEach(post => {
        console.log(post)

        const postCard = document.createElement('div')
        postCard.classList = `flex gap-5 bg-[#797DFC1A]  p-10 rounded-3xl shadow-2xl`
        postCard.innerHTML =  `
            <div class="w-[72px] h-[72px] rounded-full bg-white avatar online"> </div>

                        <div class="flex flex-col flex-1 gap-4">
                            <div class="flex gap-5">
                                <p># Music</p>
                                <p>Author : <span></span></p>
                            </div>
                            <h5 class="font-bold text-xl text-black">
                                10 Kids Unaware of Their Halloween Costume
                            </h5>
                            <p class="text-[#797DFC]">It’s one thing to subject yourself to ha Halloween costume mishap
                                because, hey that’s your prerogative</p>
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
                                        <p> 560</p>
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
                                        <p> 1,568</p>
                                    </div>
                                    <div class="flex gap-3">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28"
                                            viewBox="0 0 28 28" fill="none">
                                            <path
                                                d="M9.91667 14H14V8.16667M3.5 14C3.5 15.3789 3.77159 16.7443 4.29926 18.0182C4.82694 19.2921 5.60036 20.4496 6.57538 21.4246C7.55039 22.3996 8.70791 23.1731 9.98182 23.7007C11.2557 24.2284 12.6211 24.5 14 24.5C15.3789 24.5 16.7443 24.2284 18.0182 23.7007C19.2921 23.1731 20.4496 22.3996 21.4246 21.4246C22.3996 20.4496 23.1731 19.2921 23.7007 18.0182C24.2284 16.7443 24.5 15.3789 24.5 14C24.5 12.6211 24.2284 11.2557 23.7007 9.98182C23.1731 8.70791 22.3996 7.55039 21.4246 6.57538C20.4496 5.60036 19.2921 4.82694 18.0182 4.29927C16.7443 3.77159 15.3789 3.5 14 3.5C12.6211 3.5 11.2557 3.77159 9.98182 4.29927C8.70791 4.82694 7.55039 5.60036 6.57538 6.57538C5.60036 7.55039 4.82694 8.70791 4.29926 9.98182C3.77159 11.2557 3.5 12.6211 3.5 14Z"
                                                stroke="#12132D" stroke-opacity="0.6" stroke-width="1.5"
                                                stroke-linecap="round" stroke-linejoin="round" />
                                        </svg>
                                        <p> 5 min</p>
                                    </div>
                                </div>
                                <div>
                                    <img src="images/email 1.svg" alt="">
                                </div>
                            </div>
                        </div>
        `
        cardContainer.appendChild(postCard)
    });
}
