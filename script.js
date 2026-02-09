document.addEventListener("DOMContentLoaded", () => {
  const button = document.getElementById("createPlan");
  const result = document.getElementById("planResult");
  const map = document.getElementById("map");

  const spotData = {
    kochi: { nature:[{name:"中央公園",detail:"市内で緑を楽しむ散策",food:"近くのカフェでランチ"}], gourmet:[{name:"ひろめ市場",detail:"食べ歩きと市場散策",food:"藁焼きカツオのたたき"}], history:[{name:"高知城",detail:"天守見学と城下町散策",food:"城下町の郷土料理"}], activity:[{name:"高知駅周辺サイクリング",detail:"レンタル自転車で街中を回る",food:"カフェでランチ"}], onsen:[{name:"日帰り温泉施設",detail:"市内温泉でリラックス",food:"温泉施設内の食事"}] },
    nanbu: { nature:[{name:"室戸岬",detail:"灯台と断崖絶景",food:"地元海鮮"}], gourmet:[{name:"地元漁港グルメ",detail:"新鮮な魚介を堪能",food:"カツオ・タイ・サバ"}], history:[{name:"御厨神社",detail:"歴史ある神社参拝",food:"神社近くの軽食"}], activity:[{name:"サーフィン体験",detail:"室戸の波を楽しむ",food:"軽食・カフェ"}], onsen:[{name:"室戸温泉",detail:"海を眺めながら温泉",food:"地元海鮮料理"}] },
    seibu: { nature:[{name:"四万十川",detail:"沈下橋散策とカヌー体験",food:"川沿いで川魚"}], gourmet:[{name:"四万十グルメ",detail:"名物料理を食べ歩き",food:"うなぎ、川エビ"}], history:[{name:"古民家見学",detail:"伝統的建築を見学",food:"地元料理"}], activity:[{name:"カヌー体験",detail:"自然の川で体験",food:"お弁当持参"}], onsen:[{name:"四万十温泉",detail:"宿泊または日帰りで温泉",food:"地元郷土料理"}] },
    tobu: { nature:[{name:"足摺岬",detail:"断崖絶景と灯台",food:"海鮮"}], gourmet:[{name:"足摺グルメ",detail:"海鮮と郷土料理",food:"サバ寿司、地魚"}], history:[{name:"金剛福寺",detail:"四国霊場巡礼",food:"精進料理"}], activity:[{name:"灯台周辺散策",detail:"景色を楽しむハイキング",food:"軽食"}], onsen:[{name:"足摺温泉",detail:"宿泊で温泉",food:"海鮮料理"}] },
    chubu: { nature:[{name:"仁淀川",detail:"透明度抜群の川で散策",food:"川魚"}], gourmet:[{name:"須崎鍋焼きラーメン店",detail:"名物ラーメンを食べる",food:"鍋焼きラーメン"}], history:[{name:"須崎の古い町並み散策",detail:"歴史体験",food:"郷土料理"}], activity:[{name:"サイクリング",detail:"川沿いサイクリング",food:"地元カフェ"}], onsen:[{name:"須崎温泉",detail:"日帰り温泉体験",food:"軽食"}] }
  };

  button.addEventListener("click", () => {
    const selectedThemes = [...document.querySelectorAll('input[name="theme"]:checked')].map(i=>i.value);
    const selectedAreas = [...document.querySelectorAll('input[name="area"]:checked')].map(i=>i.value);
    result.innerHTML = "";
    if(selectedThemes.length===0||selectedAreas.length===0){
      result.innerHTML="<li>テーマとエリアを両方選択してください。</li>";
      map.src="https://www.google.com/maps?q=高知県&output=embed";
      return;
    }
    let day=1;
    selectedAreas.forEach(area=>{
      selectedThemes.forEach(theme=>{
        spotData[area][theme].forEach(spot=>{
          const li=document.createElement("li");
          li.innerHTML=`<strong>Day ${day}: ${spot.name}</strong><br>・${spot.detail}<br><em>🍴 ${spot.food}</em>`;
          result.appendChild(li);
          day++;
        });
      });
    });
    map.src=`https://www.google.com/maps?q=${encodeURIComponent(selectedAreas[0])}&output=embed`;
  });
});
