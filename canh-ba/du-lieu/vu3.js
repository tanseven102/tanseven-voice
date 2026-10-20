// VỤ 3 — CÁI HUYỆT THỨ TƯ (quỷ đội lốt thần trùng)
VU.push({
  ma: 'v3', so: 'Vụ thứ ba', ten: 'Cái huyệt thứ tư', noi: 'Nhà thờ họ Lê, quê nội',
  tom: 'Từ ngày ông nội mất, cứ bảy ngày họ Lê lại có một cái tang. Đêm nay là đêm thứ bảy.',
  nhac: 'nha-tho', anh: 'v3-cong', bat_dau: 'cong', so_khac: 40,
  mo_dau: [
    'Tôi về tới quê thì thấy ba lá cờ tang mới cắm trước cổng nhà thờ họ.',
    'Ba lá. Lúc tôi đi, chỉ có một lá của ông nội.',
    'co-ba|Mày đi biệt mấy tuần, điện tín không trả lời. Ở nhà chết gần hết rồi Khải ạ.',
    'co-ba|Chú Tư mày, bảy ngày sau ông. Thím Tư, bảy ngày sau chú. Thằng Hoà, bảy ngày sau thím. Đang khoẻ mạnh, tối đi ngủ, sáng không dậy.',
    'co-ba|Trùng tang. Ông mày chết phạm giờ, trùng nó bắt ông khai tên con cháu. Cô mời hội thầy trên huyện rồi, sáng mai họ mới tới.',
    'khai|Sáng mai. Còn đêm nay?',
    'co-ba|Đêm nay là đêm thứ bảy sau thằng Hoà.',
    'Cô không nói thêm. Cô chỉ tay ra vườn mộ. Cạnh ba nấm đất mới, có một cái huyệt đào sẵn.',
    'co-ba|Cô cho đào trước. Của ai thì chưa biết. Của cô cũng được.',
    'Tôi đã thấy bến Ông Hổ. Tôi đã đọc thư trong rương ông Đỗ. Ông nội tôi không chết phạm giờ nào cả. Ông chết, và để xổng một thứ.',
    'Tôi có từ giờ tới canh ba để gọi được tên nó.',
  ],
  manh: {
    'ba-tang': ['Ba cái tang cách nhau bảy ngày', 'Chú Tư, thím Tư, anh Hoà. Đều chết trong lúc ngủ, không bệnh. Đêm nay tròn bảy ngày sau anh Hoà.'],
    'day-do': ['Dây đỏ gốc đa', 'Ông nội cột dây đỏ quanh gốc đa trước cổng. Dây đã đứt, hai đầu cháy xém như bị đốt từ bên trong.'],
    'o-trong': ['Ô trống trên bàn thờ', 'Giữa hàng bài vị đời ông nội có một ô trống. Gỗ chỗ đó sáng màu: từng có một bài vị, bị gỡ đi từ rất lâu.'],
    'nen-nghieng': ['Nến nghiêng vào trong', 'Sổ ghi nến nhà có trùng thì nghiêng RA NGÕ, theo hướng trùng đi. Nến ở đây nghiêng VÀO, về phía buồng ông nội.'],
    'gio-ngo': ['Giờ ông mất', 'Ông nội mất giờ Ngọ, ngày thường. Thầy xem ngày đã nói không phạm trùng. Vậy mà vẫn có ba cái tang.'],
    'lich': ['Cuốn lịch của ông', 'Suốt bốn mươi năm, mỗi ngày rằm ông khoanh một vòng mực đỏ và ghi hai chữ: "cho ăn". Vòng cuối cùng là rằm trước hôm ông mất.'],
    'bua-tran': ['Một buồng toàn bùa trấn', 'Tường buồng ông dán kín bùa trấn, lớp chồng lớp. Tất cả quay mặt chữ xuống sàn. Ông không trấn cái gì ngoài kia. Ông trấn cái ở dưới chân mình.'],
    'chum': ['Cái chum dưới hầm', 'Một chum sành niêm dây đỏ, dán bùa. Chum đã nứt dọc thân, rỉ ra thứ nước đen.'],
    'dinh': ['Vòng đinh', 'Bảy cây đinh sắt đóng thành vòng quanh chum. Ba cây đã bật khỏi đất. Ba cây, ba cái tang.'],
    'ong-tre': ['"Ông trẻ"', 'Bé Tí thấy một người giống ông cố nhưng trẻ, không râu, đứng sau lưng từng người trước đêm họ chết. Nó nói ông trẻ đói, và ghét tiếng chuông.'],
    'ong-bay': ['Chú Bảy', 'Cô Ba kể: ông nội có một người em sinh đôi, chết năm 1958 lúc mười tám tuổi. Ông cấm cả họ nhắc tên. Không mộ, không bài vị, không giỗ.'],
  },
  phong: {
    cong: { ten: 'Cổng nhà thờ họ', anh: 'v3-cong', di: ['tho', 'mo'],
      ta: 'Cổng gạch phủ rêu, đôi chó đá, cây đa buông rễ. Ba lá cờ tang còn trắng. Cô Ba đứng lần tràng hạt, mắt không rời cái sân.',
      xem: [
        { ma: 'co', nhan: 'Xem ba lá cờ tang', manh: 'ba-tang', loi: [
          'Mỗi lá cờ có ghi tên và ngày bằng mực nho.',
          'Lê Văn Tư. Bảy ngày. Nguyễn Thị Hợi. Bảy ngày. Lê Văn Hoà.',
          'Tôi đếm từ ngày ghi trên lá cuối. Hôm nay vừa tròn bảy.' ] },
        { ma: 'da', nhan: 'Soi gốc cây đa', manh: 'day-do', loi: [
          'Quanh gốc đa có một vòng dây đỏ bện ba, to bằng ngón tay cái. Ông nội cột nó từ trước khi tôi ra đời.',
          'Sợi dây đã đứt. Hai đầu đứt không tưa như bị cắt, mà quăn và đen, như bị đốt.',
          'Lửa không cháy từ ngoài vào. Nó cháy từ lõi sợi dây ra.' ] },
      ] },
    tho: { ten: 'Gian thờ', anh: 'v3-tho', di: ['cong', 'buong'],
      ta: 'Bàn thờ tam cấp sơn son thếp vàng, mấy chục bài vị. Ba tấm di ảnh mới còn bọc vải trắng. Cả gian chỉ có tiếng nến lép bép.',
      xem: [
        { ma: 'bai-vi', nhan: 'Soi hàng bài vị', manh: 'o-trong', co: ['o-trong'], loi: [
          'Bài vị xếp theo đời, theo thứ. Tôi lần tới hàng của ông nội.',
          'Anh Cả. Anh Hai. Chị Ba. Rồi tới ông, thứ Sáu. Kế bên ông là một ô trống.',
          'Gỗ chỗ ô trống sáng màu hơn hẳn, hình chữ nhật, vừa một chân bài vị. Từng có một người ở đây. Có ai đó đã nhấc người ấy ra khỏi họ.' ] },
        { ma: 'nen', nhan: 'Nhìn kỹ mấy ngọn nến', manh: 'nen-nghieng', loi: [
          'Mấy chục ngọn nến trên ba cấp bàn thờ, ngọn nào cũng cháy nghiêng. Nghiêng cùng một hướng.',
          'Cô Ba bảo đó là dấu trùng. Tôi giở sổ: nến nhà có trùng thì nghiêng ra ngõ, theo đường trùng đi bắt người.',
          'Nến ở đây không nghiêng ra ngõ. Chúng nghiêng vào trong, về phía buồng của ông nội tôi. Như cả gian thờ đang cúi đầu về phía đó.' ] },
        { ma: 'anh', nhan: 'Mở vải bọc ba tấm di ảnh', loi: [
          'Tôi gỡ lớp vải trắng. Chú Tư. Thím Tư. Anh Hoà. Ảnh thẻ phóng to, mặt ai cũng nghiêm.',
          'Có cái gì sai sai. Tôi mất một lúc mới nhận ra.',
          { l: 'Cả ba người trong ảnh đều không nhìn vào ống kính. Họ nhìn lệch đi một chút. Nhìn qua vai tôi, ra sau lưng tôi.', via: -6, sfx: 'tho' } ] },
      ],
      do: {
        nen: { dau: 1, loi: [
          'Tôi thắp cây nến sáp ong của mình giữa mấy chục ngọn nến thờ.',
          'Lửa xanh. Và từng ngọn, từng ngọn nến quanh nó cũng ngả sang xanh theo, lan ra như mực loang trên giấy.' ] },
        nhang: { dau: 1, loi: [
          'Tôi thắp nhang cắm vào bát nhang tổ.',
          'Nén nhang tắt ngúm. Trong cái bát nhang hàng trăm chân nhang cũ, chân nhang của tôi là thứ duy nhất có tàn cuộn ngược.' ] },
        chuong: { dau: 1, loi: [
          'Tôi lắc chuông trước bàn thờ tổ.',
          'Không một tiếng. Cái chuông đồng câm như cục đất.',
          'Tôi nhớ dòng ông gạch chân trong sổ: trùng không bao giờ làm câm chuông. Vậy thứ đang ở trong nhà này là thứ gì?' ] } } },
    buong: { ten: 'Buồng ông nội', anh: 'v3-buong', di: ['tho', 'ham'],
      ta: 'Buồng của một thầy pháp: bùa dán kín tường, thảo dược treo, kiếm gỗ, bàn viết với nghiên chu sa đã khô. Chiếc chiếu dưới sàn hơi lệch.',
      xem: [
        { ma: 'bua', nhan: 'Đọc bùa dán trên tường', manh: 'bua-tran', loi: [
          'Hàng trăm lá. Lá mới dán đè lá cũ, lá cũ nhất đã thành bột.',
          'Tôi đã học đủ để đọc được: không có lá bùa cầu an, giải hạn nào. Tất cả là bùa trấn.',
          'Và tất cả đều dán ngược, đầu chữ chúi xuống sàn. Bốn mươi năm, ông nội tôi ngủ trên một thứ mà ông phải đè xuống mỗi đêm.' ] },
        { ma: 'ban', nhan: 'Xem bàn viết', manh: 'lich', co: ['lich'], loi: [
          'Nghiên chu sa nứt nẻ. Cây bút lông còn gác ngang.',
          'Dưới nghiên là một chồng lịch túi, năm nào cũng giữ. Tôi lật. Mỗi ngày rằm có một vòng mực đỏ và hai chữ ông viết: "cho ăn".',
          'Bên cạnh mỗi vòng là một cái tên, một địa danh. "Bến Ông Hổ." "Nhà họ Trịnh." "Con bé chết cháy xóm Chùa." Mỗi vụ ông trừ là một bữa.',
          'Vòng đỏ cuối cùng là rằm trước hôm ông mất. Từ đó tới nay đã hai lần rằm không ai cho nó ăn.' ] },
        { ma: 'ngan-keo', nhan: 'Mở ngăn kéo có khoá chữ', can: ['lich'], toan: 'manh3', loi: [
          'Ngăn kéo dưới cùng khoá bằng ổ số bốn vòng. Tôi thử năm sinh của ông. Không mở.',
          'Tôi nhìn lại tấm hình trong trí nhớ. Hai anh em sinh đôi. Tôi vẫn vặn đúng năm sinh ấy, nhưng lần này tôi biết mình đang vặn năm sinh của ai.',
          { l: 'Ổ khoá bật. Trong ngăn chỉ có một tờ giấy ố vàng, gấp làm tư, mép đã sờn vì bị mở ra gấp lại quá nhiều lần.', sfx: 'cua' },
          '"GIẤY KHAI SINH. Họ và tên: LÊ VĂN LẶNG. Sinh năm Canh Thìn, 1940. Con thứ bảy."',
          'Ông xoá em mình khỏi bàn thờ, khỏi gia phả, khỏi miệng cả họ. Nhưng tờ giấy này thì ông không nỡ đốt.' ] },
        { ma: 'chieu', nhan: 'Kéo chiếc chiếu lệch ra', co: ['cua-ham'], loi: [
          'Dưới chiếu, ván sàn có một đường cắt vuông. Một cái vòng sắt để kéo.',
          { l: 'Tôi kéo. Hơi lạnh và mùi đất ẩm, mùi gì ngọt ngọt như hoa thối, phả lên mặt.', sfx: 'cua' },
          'Một cái thang tre dẫn xuống tối om. Giường ông kê ngay trên miệng hầm này.' ] },
      ],
      do: {
        guong: { dau: 1, loi: [
          'Tôi quay lưng về phía giường ông, soi gương bát quái qua vai.',
          'Trong gương có một người ngồi ở mép giường. Dáng ông nội, áo bà ba của ông nội.',
          { l: 'Nhưng không có râu, không có nếp nhăn nào. Một thanh niên mười tám tuổi mang gương mặt ông tôi, đang nhìn tôi và mỉm cười rất hiền.', via: -8, sfx: 'tho' },
          'Tôi hạ gương. Mép giường còn lún.' ] },
        nhang: { dau: 1, loi: [
          'Tôi thắp nhang cắm lên bàn viết của ông.',
          'Tắt. Tàn cuộn ngược. Khói không bay lên mà bò sát mặt sàn, chui xuống mép chiếu.' ] } } },
    ham: { ten: 'Hầm dưới giường', anh: 'v3-ham', di: ['buong'], can: ['cua-ham'],
      ta: 'Cái hầm đất vừa đủ đứng lom khom. Một cây nến ai đó thắp sẵn, sắp tàn. Giữa hầm là một cái chum sành lớn, quấn dây đỏ, dán bùa nhiều lớp.',
      xem: [
        { ma: 'chum', nhan: 'Soi cái chum', manh: 'chum', co: ['thay-chum'], loi: [
          'Chum sành da lươn, loại người ta dùng cải táng. Miệng chum bịt vải điều, niêm dây đỏ bảy vòng, bùa dán kín như vảy cá.',
          { l: 'Một đường nứt chạy dọc thân chum từ miệng xuống đáy. Từ kẽ nứt rỉ ra một thứ nước đen, đặc, chảy ngược lên trên.', sfx: 'sanh-nut' },
          'Ông nội tôi không nhốt một con quỷ bắt được ở đâu về. Cái chum cải táng này đựng một người.' ] },
        { ma: 'dinh', nhan: 'Đếm vòng đinh quanh chum', manh: 'dinh', loi: [
          'Đinh sắt dài cả gang, đóng lút xuống nền đất thành một vòng tròn. Bảy cây.',
          'Bốn cây còn đứng. Ba cây đã bật lên, nằm chỏng chơ, mũi đinh đỏ gỉ như vừa rút khỏi thịt.',
          'Ba cây đinh. Ba cái tang. Nó không bắt người theo giờ chết xấu nào cả. Nó đang nhổ từng cái đinh một, và mỗi cái đinh giá một mạng họ Lê.' ] },
        { ma: 'nghe', nhan: 'Áp tai vào thân chum', loi: [
          'Sành lạnh như nước đá. Tôi nín thở.',
          'Bên trong có tiếng gì như người nhai. Chậm, kiên nhẫn, nhai một thứ không còn gì để nhai.',
          { l: 'Rồi tiếng nhai ngừng. Và từ trong chum, bằng đúng giọng ông nội tôi, giọng đã ru tôi ngủ hồi năm tuổi: "Khải đấy à con. Mở cho ông."', hien: 'quy', giat: 1, via: -16 },
          'Tôi ngã ngồi ra đất. Ông đã viết: nó diễn được cả người nhà mình.' ] },
      ],
      do: {
        nuoc: { dau: 1, loi: [
          'Tôi đặt chén nước mưa xuống nền, cách chum một sải tay.',
          'Nước đen ngay lập tức. Không phải đục dần. Nó đen như thể vốn dĩ là mực.' ] },
        chuong: { dau: 1, loi: [
          'Tôi lắc chuông.',
          'Câm. Nhưng lần này cái chum rung lên, lớp bùa xào xạc, và từ kẽ nứt có tiếng rít như người bị bỏng.',
          'Chuông không kêu được, nhưng nó vẫn nghe. Và nó ghét.' ] },
        nen: { dau: 1, loi: [
          'Tôi châm nến sáp ong từ cây nến sắp tàn trong hầm.',
          'Xanh. Cả hai ngọn. Trong ánh lửa xanh, bóng cái chum đổ lên vách hầm không phải hình cái chum. Nó là hình một người đang ngồi bó gối.' ] } } },
    mo: { ten: 'Vườn mộ', anh: 'v3-mo', di: ['cong'],
      ta: 'Mộ đá cũ của các cụ. Ba nấm đất mới xếp hàng, vòng hoa chưa héo. Cái huyệt thứ tư há miệng. Bé Tí ngồi trên bờ huyệt, gõ cái trống con.',
      xem: [
        { ma: 'huyet', nhan: 'Nhìn xuống cái huyệt thứ tư', loi: [
          'Huyệt đào vuông vức, sâu quá đầu người. Đất còn mùi tươi.',
          'Dưới đáy huyệt có dấu chân. Nhỏ, của trẻ con. Bé Tí đã xuống đó chơi.',
          { l: 'Bên cạnh dấu chân nó có một cặp dấu chân khác, của người lớn, chân trần. Hai cặp dấu đi song song như đang dắt tay nhau.', via: -5 } ] },
        { ma: 'mo-moi', nhan: 'Xem ba ngôi mộ mới', loi: [
          'Ba nấm đất, ba bát nhang, ba vòng hoa.',
          'Nhang trên cả ba mộ đều tắt ở cùng một độ cao, như bị cùng một hơi thổi. Tàn cuộn ngược.',
          'Người nằm dưới này không ai chết vì trùng. Họ bị ăn.' ] },
      ],
      do: { guong: { dau: 1, loi: [
        'Tôi soi gương bát quái qua vai, về phía bé Tí đang ngồi bên huyệt.',
        'Trong gương, thằng bé không ngồi một mình. Có một bàn tay người lớn đang đặt trên đầu nó, xoa nhè nhẹ.',
        { l: 'Tôi không dám nghiêng gương lên để xem bàn tay ấy nối vào cái gì.', via: -6, sfx: 'tre-cuoi' } ] } } },
  },
  nguoi: {
    'co-ba': { o: 'cong', hoi: [
      { ma: 'chet', nhan: 'Ba người mất như thế nào hả cô?', loi: [
        'co-ba|Giống hệt nhau. Tối ăn cơm bình thường, đi ngủ, sáng lay không dậy. Mặt mũi thanh thản lắm.',
        'co-ba|Có điều, cả ba đều gầy rộc đi sau một đêm. Thím Tư mày nặng năm chục cân, lúc liệm cô bế một tay.' ] },
      { ma: 'gio', nhan: 'Ông nội mất giờ nào?', manh: 'gio-ngo', loi: [
        'co-ba|Giờ Ngọ. Giữa trưa, nắng chang chang.',
        'co-ba|Thầy xem ngày bảo giờ đẹp, không phạm gì. Cô còn mừng.',
        'co-ba|Thế mà vẫn trùng. Thì là thầy xem sai chứ còn gì nữa.',
        'Hoặc là thầy xem đúng, và đây không phải trùng.' ] },
      { ma: 'bay', nhan: 'Họ mình có ông Bảy không cô?', can: ['o-trong'], manh: 'ong-bay', co: ['ong-bay'], loi: [
        'Tràng hạt trong tay cô Ba đứng lại.',
        'co-ba|Ai nói với mày?',
        'khai|Trên bàn thờ có một ô trống, ngay cạnh ông.',
        'co-ba|…Chú Bảy. Em sinh đôi của ông mày. Chết năm năm tám, mười tám tuổi. Đi làm lễ với ông mày ở đâu trong miền Tây, về có một mình ông.',
        'co-ba|Ông cấm cả họ nhắc. Không cho lập mộ gió, không cho làm giỗ, tự tay gỡ bài vị. Bà cố mày khóc tới mù mắt.',
        'co-ba|Cô chỉ biết hồi nhỏ người ta gọi chú là thằng Lặng, vì chú ít nói. Còn tên khai sinh với năm tháng thì cô chịu.' ] },
    ] },
    'be-ti': { o: 'mo', hoi: [
      { ma: 'ngoi', nhan: 'Sao con ngồi đây một mình?', manh: 'ong-tre', loi: [
        'be-ti|Con có một mình đâu chú. Con ngồi với ông trẻ.',
        'be-ti|Ông trẻ giống ông cố lắm mà không có râu. Ông hay đứng sau lưng người ta.',
        'be-ti|Bữa trước ông đứng sau lưng ba con. Rồi ba con ngủ luôn.',
        { l: 'be-ti|Giờ ông đang đứng sau lưng chú đó.', via: -6, sfx: 'tho' } ] },
      { ma: 'doi', nhan: 'Ông trẻ nói gì với con?', loi: [
        'be-ti|Ông nói ông đói. Ông cố hết cho ông ăn rồi.',
        'be-ti|Ông nói nhà mình đông người, ăn từ từ cũng được lâu.',
        'be-ti|Mà ông không ăn con đâu. Ông nói con nít không có tội gì với ông hết.' ] },
      { ma: 'trong', nhan: 'Con gõ trống làm gì vậy?', loi: [
        'be-ti|Cho ông trẻ đừng lại gần quá. Ông không ưa tiếng kêu.',
        'be-ti|Ông ghét nhất cái chuông của ông cố. Hồi ông cố còn sống, ông cố lắc chuông là ông trẻ bịt tai chui xuống đất.',
        'be-ti|Chú có cái chuông đó hông? Chú lắc thử đi, coi ổng có ở đây hông.' ] },
    ] },
  },
  su_kien: [
    { luc: 10, loi: [
      { l: 'Trong vườn mộ, tiếng trống con của bé Tí bỗng im bặt.', sfx: 'tre-cuoi' },
      'Rồi có tiếng nó cười khúc khích, như đang được ai cù.' ] },
    { luc: 20, loi: [
      { l: 'Tất cả nến trong gian thờ tắt cùng một lúc.', sfx: 'gio' },
      { l: 'Trong bóng tối, tôi nghe tiếng mấy chục tấm bài vị đồng loạt úp mặt xuống.', via: -8 } ] },
    { luc: 30, loi: [
      'Cô Ba đi ngang sân. Tràng hạt rơi dưới chân mà cô không nhặt.',
      { l: 'Cô đi về phía vườn mộ, bước đều, mắt mở, miệng mỉm cười. Sau lưng cô có một cái bóng cao, áp sát.', via: -9, hien: 'quy', sfx: 'tho' },
      'Tôi lắc chuông. Chuông không kêu, nhưng cái bóng giật lùi, và cô Ba khuỵu xuống, tỉnh lại, không hiểu sao mình đứng đây.' ] },
  ],
  het_gio: [
    { l: 'Dưới sàn buồng ông nội vang lên một tiếng "cạch". Cây đinh thứ tư.', sfx: 'sanh-nut' },
    'Canh ba. Cái huyệt ngoài vườn đang chờ một cái tên.',
    'Tôi không còn thời gian. Lập đàn ngay, với những gì tôi biết.' ],
  dan: {
    loai: 'doi-lot',
    ten: { cau: 'Thứ đang ăn họ Lê là ai?', dung: 'lang', chon: [
      { ma: 'trung', nhan: 'Thần trùng theo giờ chết của ông nội' },
      { ma: 'ong-noi', nhan: 'Vong ông nội về bắt con cháu' },
      { ma: 'bay', nhan: 'Chú Bảy, em ông nội (chưa đủ họ tên, năm sinh)', can: ['ong-bay'], an: ['g:du-ten'] },
      { ma: 'chum', nhan: 'Thứ trong chum (không biết tên)', can: ['thay-chum'], an: ['g:du-ten'] },
      { ma: 'lang', nhan: 'LÊ VĂN LẶNG, sinh năm Canh Thìn 1940, em sinh đôi của ông nội', can: ['g:du-ten'] } ] },
    nguyen: { cau: 'Vì đâu nó thành ra thế này?', dung: 'the-mang', chon: [
      { ma: 'pham-gio', nhan: 'Ông nội chết phạm giờ, trùng theo về' },
      { ma: 'ho-khac', nhan: 'Họ khác yểm bùa phá long mạch nhà thờ' },
      { ma: 'the-mang', nhan: 'Chết thay anh năm 1958, rồi bị anh giữ làm âm binh bốn mươi năm: không mộ, không bài vị, không tên' },
      { ma: 'quy-doi', nhan: 'Quỷ đói lang thang lọt vào lúc nhà có tang' } ] },
    giai: { cau: 'Hoá giải bằng cách nào?', dung: 'tien', xau: ['dap', 'nhot-trung'], chon: [
      { ma: 'nhot-trung', nhan: 'Cầm cự chờ hội thầy, lập đàn nhốt trùng' },
      { ma: 'va-an', nhan: 'Lấy máu mình vá ấn, nhận giữ chum thay ông', can: ['thay-chum'] },
      { ma: 'dap', nhan: 'Đập vỡ chum cho nó tan', can: ['thay-chum'] },
      { ma: 'tien', nhan: 'Gọi đủ tên, đặt bài vị vào ô trống, cắt dây đỏ tiễn chú đi', can: ['g:du-ten'] } ] },
    buoc: { dung: ['chuong', 'ten', 'bai-vi', 'cat-day'], chon: [
      ['bai-vi', 'Lập bài vị, thắp nhang mời về làm người nhà'], ['hinh-nhan', 'Đốt bảy hình nhân thế mạng'], ['cat-day', 'Cắt dây đỏ, mở miệng chum'],
      ['chuong', 'Rung chuông ba hồi'], ['dinh', 'Đóng lại ba cây đinh đã bật'], ['ten', 'Gọi đủ họ, tên, năm sinh thật'] ] },
  },
  ket: {
    tot: [
      'Tôi rung chuông ba hồi trước miệng hầm. Chuông vẫn câm. Nhưng dưới kia cái chum gào lên, và lần đầu tiên nó thôi không giả giọng ai.',
      { l: 'Nó trồi lên qua sàn. Cao, đen như tro, mặt dán kín bùa cũ, chỉ chừa cái miệng cười.', hien: 'quy', sfx: 'sanh-nut' },
      'khai|Lê Văn Lặng. Sinh năm Canh Thìn. Con thứ bảy.',
      'Nụ cười đó tắt. Từng lớp bùa trên mặt nó bong ra, rơi xuống như lá khô.',
      'khai|Chú chết thay ông nội cháu năm mười tám tuổi. Ông cháu sợ mất chú nên giữ chú lại. Giữ sai cách, sai bốn mươi năm.',
      'khai|Cháu không trấn chú. Cháu mời chú về nhà.',
      'Tôi đặt tấm bài vị mới, mực chưa khô, vào đúng cái ô trống cạnh bài vị ông nội. Thắp nhang. Nhang cháy thẳng.',
      { l: 'Dưới lớp bùa cuối cùng là mặt một cậu trai mười tám tuổi, giống ông tôi như đúc, đang khóc như đứa trẻ bị bỏ quên ngoài chợ.', sfx: 'thanh-than' },
      'Tôi cắt sợi dây đỏ. Cái chum vỡ đôi. Bên trong chỉ có một nắm xương nhỏ và một cái chuông đồng, anh em với cái chuông tôi đang cầm.',
      { l: 'Lúc gà gáy, bé Tí chạy vào níu áo tôi: "Chú ơi, ông trẻ đi rồi. Có ông cố ra dắt. Hai ông giống nhau ghê."', anh: 'sieu-thoat' },
      'Cái huyệt thứ tư ngoài vườn không bị lấp. Tôi chôn nắm xương ở đó, dựng bia, khắc đủ họ tên năm sinh. Từ nay họ Lê có giỗ chú Bảy.',
      'Tôi giữ lại cuốn sổ. Trang cuối bị xé, tôi dán vào một tờ mới và viết dòng đầu tiên của mình:',
      'khai|"Đừng trấn. Hỏi cho ra nó là AI, nó thiếu CÁI GÌ. Rồi trả."' ],
    vua: [
      'Tôi không gọi được tên nó. Tôi chỉ còn một cách, cách của ông.',
      'Tôi rạch lòng bàn tay, miết máu dọc đường nứt trên thân chum. Đóng lại ba cây đinh. Quấn sợi dây đỏ mới.',
      { l: 'Cái chum rung lên dữ dội rồi lặng dần. Từ bên trong, giọng ông nội tôi thở dài: "Ừ. Vậy cũng được. Rằm này nhớ cho chú ăn nghe con."', sfx: 'sanh-nut', hien: 'quy' },
      'Không còn cái tang thứ tư. Cô Ba cho lấp huyệt. Cả họ mừng, bảo tôi giỏi như ông.',
      'Tôi dọn vào buồng ông nội. Tôi kê giường lên đúng chỗ miệng hầm.',
      'Mỗi ngày rằm, tôi sẽ phải tìm một nhà có vong, tới đó, và đè một người chết xuống để nuôi một người chết khác. Như ông đã làm bốn mươi năm.',
      'Tôi lật cuốn lịch túi, khoanh một vòng mực đỏ quanh ngày rằm tới. Tay tôi tự viết hai chữ: "cho ăn".',
      'Có ba chỗ ông giấu tên thật của nó. Tôi đã không tìm đủ.' ],
    xau: [
      'Tôi đã chọn sai. Tôi gọi nó bằng một cái tên không phải của nó.',
      { l: 'Ông đã viết: mỗi lần gọi sai là cho nó thêm một cái mặt.', sfx: 'sanh-nut' },
      { l: 'Cái chum vỡ tung. Thứ bước ra mang mặt ông nội tôi, rồi mặt chú Tư, rồi mặt anh Hoà, rồi một cái mặt mà tôi nhìn thấy mỗi sáng trong gương.', hien: 'quy', giat: 1 },
      'Sáng hôm sau hội thầy trên huyện tới nơi. Họ thấy nhà thờ họ Lê mở toang, nến cháy xanh giữa ban ngày.',
      'Ngoài vườn, cái huyệt thứ tư đã có người nằm. Bên cạnh, ai đó đang cặm cụi đào cái thứ năm, bằng tay không, và mỉm cười rất hiền.' ],
  },
});
