// --------------- map ---------------
var mapContainer = document.getElementById('map'), // 지도를 표시할 div
  mapOption = {
    center: new kakao.maps.LatLng(35.24423653345124, 129.08873580149654), // 지도의 중심좌표
    level: 3, // 지도의 확대 레벨
    mapTypeId: kakao.maps.MapTypeId.ROADMAP, // 지도종류
  };

// 지도를 생성한다
var map = new kakao.maps.Map(mapContainer, mapOption);

// prettier-ignore
var mapData = [
  // 0, 1: 지도 좌표
  // 2: 번호  3: 가게 명  4: 위치
  // 5: 카테고리  6: 해쉬
  // 7: 가게 이미지
  // 8: 점수  9: 평점  10: 리뷰 수  11: 찜 수

  [
    35.24423653345124,
    129.08873580149654,
    '1',
    '몰틀리',
    '구서',
    '살얼음맥주',
    '#회식장소, #분위기좋은, #칸막이',
    '몰틀리_구서.png',
    15,
    '0.0',
    0,
    0,
  ],
  [
    35.24591002450552,
    129.08862769480083,
    '2',
    '호맥',
    '구서',
    '맥주, 호프',
    '#배달, #포장',
    '호맥_구서.jpeg',
    15,
    '0.0',
    0,
    0,
  ],
  [
    35.24409924235264,
    129.08938037018723,
    '3',
    '쉼, 어묵 그리고 한잔 술',
    '구서',
    '어묵, 오뎅바',
    '#회식, #배달, #깔끔한, #단체석',
    '쉼_구서.jpeg',
    15,
    '0.0',
    0,
    0,
  ],
  [
    35.244972444425336,
    129.08917210040258,
    '4',
    '역전할머니맥주',
    '구서',
    '맥주, 호프',
    '#맛있는안주, #포장',
    '역전할머니맥주_구서.jpeg',
    15,
    '0,0',
    0,
    0,
  ],
  [
    35.24339226618811,
    129.0879205125658,
    '5',
    '옥수관',
    '구서',
    '곰탕, 한우곰탕',
    '#몸보신, #소주, #칸막이',
    '옥수관_구서.jpeg',
    42,
    '4,7',
    3,
    5,
  ],
];

for (var i = 0; i < mapData.length; i++) {
  // 지도에 마커를 생성하고 표시한다
  var marker = new kakao.maps.Marker({
    position: new kakao.maps.LatLng(mapData[i][0], mapData[i][1]), // 마커의 좌표
    map: map, // 마커를 표시할 지도 객체
  });

  // 커스텀 오버레이를 생성합니다
  var customOverlay = new kakao.maps.CustomOverlay({
    position: new kakao.maps.LatLng(mapData[i][0], mapData[i][1]),
    content: `<div class="marker" id="marker${i}">
                <div class="marker__bar"></div>
                <div class="marker__point">
                  <span class="marker__number">${mapData[i][2]}</span>
                </div>
                <div class="marker__container">
                  <div class="marker__title">${mapData[i][3]}</div>
                  <div class="marker__category">${mapData[i][5]}</div>
                </div>
              </div>`,
  });

  // 커스텀 오버레이를 지도에 표시합니다
  customOverlay.setMap(map);
}

// --------------- list element ---------------
const listContainer = document.getElementById('list');

for (let i = 0; i < mapData.length; i++) {
  const listBox = document.createElement('div');
  listBox.className = 'list__box';
  listBox.id = `list__box${i}`;
  const listContent = document.createElement('div');
  listContent.className = 'list__content';

  const listImg = document.createElement('div');
  listImg.className = 'list__img';
  const image = document.createElement('img');
  image.src = `./images/map/${mapData[i][7]}`;
  listImg.appendChild(image);
  listContent.appendChild(listImg);

  const listInfo = document.createElement('div');
  listInfo.className = 'list__info';
  const listTitle = document.createElement('div');
  listTitle.className = 'list__title';
  listTitle.innerText = `${mapData[i][2]}. ${mapData[i][3]}`;
  const listCategory = document.createElement('div');
  listCategory.className = 'list__category';
  listCategory.innerText = mapData[i][5];
  const listHash = document.createElement('div');
  listHash.className = 'list__hash';
  listHash.innerHTML = mapData[i][6];
  const listRate = document.createElement('div');
  listRate.className = 'list__rate';
  listRate.innerText = `${mapData[i][8]}점 | ${mapData[i][9]} (${mapData[i][10]}명) | ${mapData[i][11]}`;
  listInfo.appendChild(listTitle);
  listInfo.appendChild(listCategory);
  listInfo.appendChild(listHash);
  listInfo.appendChild(listRate);
  listContent.appendChild(listInfo);

  listBox.appendChild(listContent);
  listContainer.appendChild(listBox);
}

// --------------- marker event ---------------
for (let i = 0; i < mapData.length; i++) {
  for (let j = 0; j < mapData.length; j++) {
    let marker = document.getElementById(`marker${i}`);
    let listBox = document.getElementById(`list__box${j}`);

    marker.addEventListener('click', () => {
      if (i === j) {
        listBox.style.backgroundColor = '#f5f5f5';
      } else {
        listBox.style.backgroundColor = '';
      }
    });
  }
}
