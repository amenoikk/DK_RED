const map = L.map('map').setView([37.5665, 126.9780], 11);

    const tileLayers = {
      'osm': L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '© OpenStreetMap contributors'
      }),
      'cartodb-dark': L.tileLayer('https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png', {
        attribution: '© CARTO'
      }),
      'esri-imagery': L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}', {
        attribution: 'Tiles © Esri'
      })
    };

    tileLayers['osm'].addTo(map);

    const locations = [
          {
            name: "암사 (Amsa)",
            lat: 37.5502,
            lon: 127.1310,
            info: `
              <table>
                <tr><th>수질 오염지표</th><th>오염농도</th></tr>
                <tr><td>수소인온농도 (pH)</td><td>7.5</td></tr>
                <tr><td>용존산소 (mg/l) (DO)</td><td>8.0 mg/L</td></tr>
                <tr><td>수온(°C)</td><td>20°C</td></tr>
              </table>
            `
          },
          {
            name: "구의 (Guui)",
            lat: 37.5371,
            lon: 127.0857,
            info: `
              <table>
                <tr><th>수질 오염지표</th><th>오염농도</th></tr>
                <tr><td>수소인온농도 (pH)</td><td>6.9</td></tr>
                <tr><td>용존산소 (mg/l) (DO)</td><td>7.5 mg/L</td></tr>
                <tr><td>수온(°C)</td><td>21°C</td></tr>
              </table>
            `
          },
          {
            name: "잠실 (Jamsil)",
            lat: 37.5139,
            lon: 127.1025,
            info: `
              <table>
                <tr><th>수질 오염지표</th><th>오염농도</th></tr>
                <tr><td>수소인온농도 (pH)</td><td>7.1</td></tr>
                <tr><td>용존산소 (mg/l) (DO)</td><td>8.2 mg/L</td></tr>
                <tr><td>수온(°C)</td><td>19°C</td></tr>
              </table>
            `
          },
          {
            name: "보광 (Bogwang)",
            lat: 37.5342,
            lon: 126.9957,
            info: `
              <table>
                <tr><th>수질 오염지표</th><th>오염농도</th></tr>
                <tr><td>수소인온농도 (pH)</td><td>7.3</td></tr>
                <tr><td>용존산소 (mg/l) (DO)</td><td>8.1 mg/L</td></tr>
                <tr><td>수온(°C)</td><td>22°C</td></tr>
              </table>
            `
          },
          {
            name: "노량진 (Noryangjin)",
            lat: 37.5135,
            lon: 126.9410,
            info: `
              <table>
                <tr><th>수질 오염지표</th><th>오염농도</th></tr>
                <tr><td>수소인온농도 (pH)</td><td>7.4</td></tr>
                <tr><td>용존산소 (mg/l) (DO)</td><td>7.8 mg/L</td></tr>
                <tr><td>수온(.C)</td><td>20.5°C</td></tr>
              </table>
            `
          },
          {
            name: "영등포 (Yeongdeungpo)",
            lat: 37.5172,
            lon: 126.9059,
            info: `
              <table>
                <tr><th>수질 오염지표</th><th>오염농도</th></tr>
                <tr><td>수소인온농도 (pH)</td><td>6.8</td></tr>
                <tr><td>용존산소 (mg/l) (DO)</td><td>7.6 mg/L</td></tr>
                <tr><td>수온(.C)</td><td>21.5°C</td></tr>
              </table>
            `
          },
          {
            name: "가양 (Gayang)",
            lat: 37.5611,
            lon: 126.8544,
            info: `
              <table>
                <tr><th>수질 오염지표</th><th>오염농도</th></tr>
                <tr><td>수소인온농도 (pH)</td><td>7.0</td></tr>
                <tr><td>용존산소 (mg/l) (DO)</td><td>8.3 mg/L</td></tr>
                <tr><td>수온(°C)</td><td>19°C</td></tr>
              </table>
            `
          },
          {
            name: "행주 (Haengju)",
            lat: 37.5616,
            lon: 126.8017,
            info: `
              <table>
                <tr><th>수질 오염지표</th><th>오염농도</th></tr>
                <tr><td>수소인온농도 (pH)</td><td>7.2</td></tr>
                <tr><td>용존산소 (mg/l) (DO)</td><td>8.0 mg/L</td></tr>
                <tr><td>수온(°C)</td><td>20°C</td></tr>
              </table>
            `
          },
          {
            name: "탄천6 (Tancheon6)",
            lat: 37.4811,
            lon: 127.0734,
            info: `
              <table>
                <tr><th>수질 오염지표</th><th>오염농도</th></tr>
                <tr><td>수소인온농도 (pH)</td><td>6.5</td></tr>
                <tr><td>용존산소 (mg/l) (DO)</td><td>7.9 mg/L</td></tr>
                <tr><td>수온(.C)</td><td>20.8°C</td></tr>
              </table>
            `
          },
          {
            name: "중랑천6 (Jungnangcheon6)",
            lat: 37.5944,
            lon: 127.0858,
            info: `
              <table>
                <tr><th>수질 오염지표</th><th>오염농도</th></tr>
                <tr><td>수소인온농도 (pH)</td><td>7.4</td></tr>
                <tr><td>용존산소 (mg/l) (DO)</td><td>8.5 mg/L</td></tr>
                <tr><td>수온(.C)</td><td>19.5°C</td></tr>
              </table>
            `
          },
          {
            name: "안양천10 (Anyangcheon10)",
            lat: 37.4989,
            lon: 126.8822,
            info: `
              <table>
                <tr><th>수질 오염지표</th><th>오염농도</th></tr>
                <tr><td>수소인온농도 (pH)</td><td>7.1</td></tr>
                <tr><td>용존산소 (mg/l) (DO)</td><td>8.0 mg/L</td></tr>
                <tr><td>수온(°C)</td><td>21°C</td></tr>
              </table>
            `
          },
          {
            name: "뚝도 (Ttukdo)",
            lat: 37.5316,
            lon: 127.0378,
            info: `
              <table>
                <tr><th>수질 오염지표</th><th>오염농도</th></tr>
                <tr><td>수소인온농도 (pH)</td><td>7.0</td></tr>
                <tr><td>용존산소 (mg/l) (DO)</td><td>8.2 mg/L</td></tr>
                <tr><td>수온(.C)</td><td>20.0°C</td></tr>
              </table>
            `
          },
          {
            name: "팔당댐 (Paldangdam)",
            lat: 37.5400,
            lon: 127.2506,
            info: `
              <table>
                <tr><th>수질 오염지표</th><th>오염농도</th></tr>
                <tr><td>수소인온농도 (pH)</td><td>7.3</td></tr>
                <tr><td>용존산소 (mg/l) (DO)</td><td>8.4 mg/L</td></tr>
                <tr><td>수온(.C)</td><td>19.8°C</td></tr>
              </table>
            `
          },
          {
            name: "홍제천 (Hongjecheon)",
            lat: 37.5856,
            lon: 126.9441,
            info: `
              <table>
                <tr><th>수질 오염지표</th><th>오염농도</th></tr>
                <tr><td>수소인온농도 (pH)</td><td>6.9</td></tr>
                <tr><td>용존산소 (mg/l) (DO)</td><td>7.7 mg/L</td></tr>
                <tr><td>수온(.C)</td><td>21.2°C</td></tr>
              </table>
            `
          },
          {
            name: "양재천 (Yangjaecheon)",
            lat: 37.4848,
            lon: 127.0412,
            info: `
              <table>
                <tr><th>수질 오염지표</th><th>오염농도</th></tr>
                <tr><td>수소인온농도 (pH)</td><td>7.5</td></tr>
                <tr><td>용존산소 (mg/l) (DO)</td><td>8.1 mg/L</td></tr>
                <tr><td>수온(.C)</td><td>20.1°C</td></tr>
              </table>
            `
          },
          {
            name: "정릉천 (Jeongneungcheon)",
            lat: 37.6087,
            lon: 127.0056,
            info: `
              <table>
                <tr><th>수질 오염지표</th><th>오염농도</th></tr>
                <tr><td>수소인온농도 (pH)</td><td>6.7</td></tr>
                <tr><td>용존산소 (mg/l) (DO)</td><td>7.4 mg/L</td></tr>
                <tr><td>수온(.C)</td><td>21.0°C</td></tr>
              </table>
            `
          },
          {
            name: "도림천 (Dorimcheon)",
            lat: 37.5045,
            lon: 126.8845,
            info: `
              <table>
                <tr><th>수질 오염지표</th><th>오염농도</th></tr>
                <tr><td>수소인온농도 (pH)</td><td>7.0</td></tr>
                <tr><td>용존산소 (mg/l) (DO)</td><td>7.8 mg/L</td></tr>
                <tr><td>수온(.C)</td><td>19.6°C</td></tr>
              </table>
            `
          },
          {
            name: "목감천1 (Mokgamcheon1)",
            lat: 37.3596,
            lon: 126.8668,
            info: `
              <table>
                <tr><th>수질 오염지표</th><th>오염농도</th></tr>
                <tr><td>수소인온농도 (pH)</td><td>7.2</td></tr>
                <tr><td>용존산소 (mg/l) (DO)</td><td>8.0 mg/L</td></tr>
                <tr><td>수온(.C)</td><td>20.3°C</td></tr>
              </table>
            `
          },
          {
            name: "고덕천 (Godeokcheon)",
            lat: 37.5534,
            lon: 127.1538,
            info: `
              <table>
                <tr><th>수질 오염지표</th><th>오염농도</th></tr>
                <tr><td>수소인온농도 (pH)</td><td>7.1</td></tr>
                <tr><td>용존산소 (mg/l) (DO)</td><td>7.9 mg/L</td></tr>
                <tr><td>수온(.C)</td><td>20.7°C</td></tr>
              </table>
            `
          },
          {
            name: "성내천 (Seongnaechon)",
            lat: 37.5290,
            lon: 127.1268,
            info: `
              <table>
                <tr><th>수질 오염지표</th><th>오염농도</th></tr>
                <tr><td>수소인온농도 (pH)</td><td>6.8</td></tr>
                <tr><td>용존산소 (mg/l) (DO)</td><td>8.1 mg/L</td></tr>
                <tr><td>수온(.C)</td><td>20.0°C</td></tr>
              </table>
            `
          },
          {
            name: "청계천1 (Cheonggyecheon1)",
            lat: 37.5703,
            lon: 127.0090,
            info: `
              <table>
                <tr><th>수질 오염지표</th><th>오염농도</th></tr>
                <tr><td>수소인온농도 (pH)</td><td>7.3</td></tr>
                <tr><td>용존산소 (mg/l) (DO)</td><td>8.4 mg/L</td></tr>
                <tr><td>수온(.C)</td><td>19.9°C</td></tr>
              </table>
            `
          },
          {
            name: "청계천2 (Cheonggyecheon2)",
            lat: 37.5700,
            lon: 127.0248,
            info: `
              <table>
                <tr><th>수질 오염지표</th><th>오염농도</th></tr>
                <tr><td>수소인온농도 (pH)</td><td>7.2</td></tr>
                <tr><td>용존산소 (mg/l) (DO)</td><td>7.6 mg/L</td></tr>
                <tr><td>수온(.C)</td><td>21.1°C</td></tr>
              </table>
            `
          },
          {
            name: "청계천3 (Cheonggyecheon3)",
            lat: 37.5712,
            lon: 127.0368,
            info: `
              <table>
                <tr><th>수질 오염지표</th><th>오염농도</th></tr>
                <tr><td>수소인온농도 (pH)</td><td>7.0</td></tr>
                <tr><td>용존산소 (mg/l) (DO)</td><td>8.3 mg/L</td></tr>
                <tr><td>수온(.C)</td><td>20.2°C</td></tr>
              </table>
            `
          },
          {
            name: "성북천 (Seongbukcheon)",
            lat: 37.5895,
            lon: 127.0163,
            info: `
              <table>
                <tr><th>수질 오염지표</th><th>오염농도</th></tr>
                <tr><td>수소인온농도 (pH)</td><td>6.9</td></tr>
                <tr><td>용존산소 (mg/l) (DO)</td><td>7.7 mg/L</td></tr>
                <tr><td>수온(.C)</td><td>19.7°C</td></tr>
              </table>
            `
          },
          {
            name: "우이천 (Uicheon)",
            lat: 37.6474,
            lon: 127.0124,
            info: `
              <table>
                <tr><th>수질 오염지표</th><th>오염농도</th></tr>
                <tr><td>수소인온농도 (pH)</td><td>7.5</td></tr>
                <tr><td>용존산소 (mg/l) (DO)</td><td>8.0 mg/L</td></tr>
                <tr><td>수온(.C)</td><td>20.6°C</td></tr>
              </table>
            `
          },
        ];


    const markers = {};

    locations.forEach(location => {
      const marker = L.marker([location.lat, location.lon]).addTo(map);
      markers[location.name] = marker;

      marker.bindPopup(location.name);
      marker.on('click', () => showLocationInfo(location));
    });

    function showLocationInfo(location) {
      map.setView([location.lat, location.lon], 14);
      document.getElementById('location-title').innerText = location.name;
      document.getElementById('location-description').innerHTML = location.info;
      document.getElementById('location-info-container').style.display = 'block';
      document.getElementById('location-dropdown').value = location.name; // Sync dropdown
    }

    function goToLocation() {
      const selectedName = document.getElementById('location-dropdown').value;
      const location = locations.find(loc => loc.name === selectedName);
      if (location) {
        markers[location.name].openPopup(); // Simulate pin click
        showLocationInfo(location);
      }
    }

    function returnToHome() {
      document.getElementById('location-info-container').style.display = 'none';
      document.getElementById('location-dropdown').value = '';
      map.setView([37.5665, 126.9780], 11);
    }

    function changeMap(style) {
      map.eachLayer(layer => {
        if (layer instanceof L.TileLayer) map.removeLayer(layer);
      });
      tileLayers[style]?.addTo(map) || alert('Invalid layer!');
    }
