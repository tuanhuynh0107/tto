document.addEventListener('DOMContentLoaded', function () {
    var cardTitleElements = document.querySelectorAll('.card-title');
    if (cardTitleElements.length > 0) {

        cardTitleElements.forEach(function (titleElement) {

            titleElement.classList.remove('custom-bg');

            var value = titleElement.innerText.trim().toLowerCase();
            console.log(value);

            if (value === 'react') {
                titleElement.style.background = 'linear-gradient(116deg, #38BADE 33.56%, rgba(56, 186, 222, 0.85) 68.84%, #38BADE 73.29%, #38BADE 90.03%)';
                titleElement.classList.add('custom-bg');
            } else if (value === 'html css') {
                titleElement.style.background = 'linear-gradient(116deg, #F7904A 33.56%, rgba(248, 158, 97, 0.85) 68.84%, #F7904A 68.85%, rgba(247, 144, 74, 0.53) 90.03%)';
                titleElement.classList.add('custom-bg');
            }
            else if (value === 'javascript') {
                titleElement.style.background = 'linear-gradient(116deg, #139A06 33.56%, rgba(18, 154, 5, 0.56) 67.36%, rgba(18, 154, 5, 0.80) 68.84%, rgba(18, 154, 5, 0.53) 90.03%)';
                titleElement.classList.add('custom-bg');
            }
            else if (value === 'ui ux design') {
                titleElement.style.background = 'linear-gradient(116deg, #8E80FA 33.56%, rgba(142, 128, 250, 0.85) 67.07%, #8E80FA 69.14%, #8E80FA 90.03%)';
                titleElement.classList.add('custom-bg');
            }
            else if (value === 'excel 1 office') {
                titleElement.style.background = 'linear-gradient(116deg, #129A05 33.56%, #129A05 68.84%, #129A05 70.62%, #129A05 90.03%)';
                titleElement.classList.add('custom-bg');
            }
            else if (value === 'word 1 office') {
                titleElement.style.background = 'linear-gradient(116deg, #103F91 33.56%, #185ABD 68.84%, #2B7CD3 70.62%, #41A5EE 90.03%)';
                titleElement.classList.add('custom-bg');
            }
            else if (value === 'powerpoint office') {
                titleElement.style.background = 'linear-gradient(116deg, #D33922 33.56%, #FF5238 68.84%, #FF6D57 70.62%, #FF9889 90.03%)';
                titleElement.classList.add('custom-bg');
            }
        });
    } else {
        console.error('Không tìm thấy phần tử với lớp .card-title');
    }
});