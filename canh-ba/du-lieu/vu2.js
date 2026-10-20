// VỤ 2 — ĐÊM CANH QUAN (quỷ nhập tràng)
VU.push({
  ma: 'v2', so: 'Vụ thứ hai', ten: 'Đêm canh quan', noi: 'Làng Vân, Kinh Bắc, mưa phùn',
  tom: 'Đám tang ông Đỗ Khoát. Phường kèn bỏ về giữa chừng vì trong quan tài có tiếng gõ.',
  nhac: 'dam-tang', anh: 'v2-san', bat_dau: 'san', so_khac: 38,
  mo_dau: [
    'Bức điện tín chỉ có bảy chữ: "BỐ MẤT. QUAN CÓ TIẾNG. VỀ NGAY. — ĐỖ TRƯỜNG."',
    'Tôi không quen ai tên Đỗ Trường. Nhưng trong sổ ông nội, cái tên Đỗ Khoát xuất hiện mười một lần, lần nào cũng kèm hai chữ "sư huynh".',
    'Tôi tới làng Vân lúc nhá nhem. Rạp đám đã dựng, cờ tang đã cắm, mà sân vắng tanh. Bộ trống kèn nằm chỏng chơ trên bàn.',
    'truong|Cậu là cháu cụ Sáu? Tốt. Vào việc luôn cho nhanh.',
    'truong|Con mèo đen nó nhảy qua người ông cụ. Cả làng biết thế là thế nào rồi. Cậu làm lễ, đóng đinh, tôi cho người chôn ngay trong đêm.',
    'khai|Chưa tới giờ động quan mà anh.',
    'truong|Giờ giấc gì nữa. Cậu nghe đi.',
    { l: 'Từ gian giữa vọng ra ba tiếng gõ. Chậm. Đều. Gõ từ bên trong.', sfx: 'go-quan-tai' },
    'Tôi giở sổ. Ông viết, gạch dưới hai lần: "Chớ đóng đinh chôn vội. Chôn một cái xác đang có khách là chôn cả làng."',
    'Tôi có từ giờ tới canh ba để biết ai đang nằm trong cỗ quan đó.',
  ],
  manh: {
    'phuong-ken': ['Phường kèn bỏ về', 'Phường bát âm bỏ cả trống kèn mà chạy từ chập tối, không lấy tiền công.'],
    'den': ['Ngọn đèn dưới quan', 'Đèn dưới quan đang cháy nhưng bấc mới tinh, đĩa dầu còn đầy. Nó đã tắt một lúc lâu rồi mới được thắp lại.'],
    'mieng': ['Miệng người chết', 'Miệng ông Đỗ há, trống không. Phạn hàm (đồng tiền và nhúm gạo) đã bị moi mất. Ngón cái tay phải dính mực đỏ.'],
    'so-bay': ['Chữ cào trên tường', 'Cạnh giường ông Đỗ, tường bị cào đầy một con số lặp đi lặp lại: 7. 7. 7.'],
    'loi-ba': ['Lời bà Mùi', 'Trước khi mất ông Đỗ nói: "Thằng Sáu chết rồi. Giờ thằng Bảy nó tới tìm tôi. Tôi biết tên nó." Ông không sợ chết. Ông sợ bị tìm thấy.'],
    'giay': ['Giấy bán đất', 'Dưới chiếu có tờ giấy bán thửa vườn sau, điểm chỉ bằng ngón cái. Ngày ghi là HÔM QUA — sau khi ông Đỗ chết một ngày.'],
    'meo': ['Con mèo mực', 'Con mèo đen bị chị Xuân nhốt trong lồng gà dưới bếp từ lúc ông tắt thở. Nó chưa hề lên nhà trên.'],
    'xuan': ['Điều chị Xuân thấy', 'Đêm qua anh Trường ở một mình cạnh xác, đèn dưới quan tắt, cầm tay người chết. Sáng ra anh đào đất sau giếng.'],
    'tien': ['Đồng tiền phạn hàm', 'Chôn cạnh giếng: lọ thuỷ tinh đựng một đồng tiền vàng và nhúm gạo còn dính nước dãi.'],
    'thu-toi': ['Lời anh Trường', 'Trường tắt đèn cho khỏi ai thấy, cầm tay bố điểm chỉ vào giấy bán đất, rồi tiện tay moi luôn đồng tiền vàng trong miệng.'],
  },
  phong: {
    san: { ten: 'Sân rạp', anh: 'v2-san', di: ['giua', 'bep'],
      ta: 'Rạp bạt, cờ trắng, ghế nhựa xếp chồng. Mưa phùn. Anh Trường đi đi lại lại, chốc chốc xem đồng hồ.',
      xem: [
        { ma: 'trong', nhan: 'Xem bộ trống kèn bỏ lại', manh: 'phuong-ken', loi: [
          'Cái trống cái, đôi dùi, cây kèn bầu còn ướt nước bọt. Phong bì tiền công nằm nguyên dưới chân đèn.',
          'Thợ kèn đám ma là hạng người lì nhất làng. Họ thổi bên xác chết cả đời.',
          'Thứ gì làm một phường bát âm bỏ cả cần câu cơm mà chạy?' ] },
        { ma: 'co', nhan: 'Nhìn mấy lá cờ tang', loi: [
          'Không có gió. Mưa rơi thẳng.',
          'Vậy mà cả ba lá cờ trắng đều phất về một hướng: vào nhà. Như có thứ gì trong đó đang hít vào.' ] },
      ] },
    giua: { ten: 'Gian giữa', anh: 'v2-giua', di: ['san', 'buong'],
      ta: 'Cỗ quan sơn son kê trên hai ghế đẩu. Bát cơm quả trứng trên nắp. Ngọn đèn dầu dưới gầm quan. Bà Mùi ngồi ở chân quan, không khóc.',
      xem: [
        { ma: 'den', nhan: 'Cúi xem ngọn đèn dưới quan', manh: 'den', co: ['den-tat'], loi: [
          'Đèn dưới quan phải cháy suốt từ lúc nhập quan tới lúc hạ huyệt. Nó soi đường cho người chết, và giữ cho không thứ gì khác mò tới.',
          'Ngọn đèn này đang cháy. Nhưng bấc trắng tinh, mới thay. Đĩa dầu đầy tới miệng.',
          'Đèn cháy hai đêm thì bấc phải đen, dầu phải vơi. Nó đã tắt. Tắt lâu. Rồi có người lặng lẽ thắp lại.' ] },
        { ma: 'nap', nhan: 'Áp tai lên nắp quan', loi: [
          'Gỗ lạnh. Mùi sơn ta, mùi trà khô ướp xác.',
          'Im lặng. Tôi đếm tới mười.',
          { l: 'Rồi ngay dưới tai tôi, cách một lần ván: ba tiếng gõ. Và sau đó, một tiếng nữa mà người gõ nhịp không bao giờ gõ: tiếng móng tay cào.', sfx: 'go-quan-tai', via: -7 } ] },
        { ma: 'dao', nhan: 'Xem con dao trên nắp quan', loi: [
          'Con dao bài đặt trên nắp quan để yểm, mũi phải chỉ ra cửa.',
          'Con dao này mũi quay vào trong, chĩa thẳng lên bàn thờ. Có ai đụng vào, hoặc có thứ gì bên dưới đã đẩy nó xoay đi.' ] },
        { ma: 'mo-nap', nhan: 'Hé nắp quan nhìn mặt người chết', can: ['ba-cho'], manh: 'mieng', co: ['mieng-trong'], loi: [
          { l: 'Bà Mùi quay mặt đi. Tôi nhấc nắp lên một gang tay.', sfx: 'cua' },
          'Ông Đỗ nằm đó, da màu sáp. Nhưng tấm vải phủ mặt đã tụt xuống ngực, và miệng ông há hốc.',
          'Tôi soi đèn. Trong miệng không có gì. Người ta chết phải ngậm đồng tiền với nhúm gạo cho hồn khỏi đói, cho miệng khép lại. Miệng ông bị cạy ra, phạn hàm bị moi mất.',
          'Tay phải ông co quắp. Ngón cái dính mực son đỏ.',
          { l: 'Lúc tôi hạ nắp xuống, tôi thề là con mắt bên trái vừa hé ra.', via: -8, hien: 'xac-do', sfx: 'tho' } ] },
      ],
      do: {
        chuong: { dau: 1, loi: [
          'Tôi rút chuông đồng, lắc ba cái trước đầu quan.',
          'Quả lắc đập vào thành chuông. Tôi thấy nó đập. Tôi thấy tay mình rung.',
          'Không có một tiếng nào. Âm thanh bị hút tuột vào cỗ quan như nước rút xuống lỗ. Bà Mùi nhìn cái chuông rồi nhìn tôi, lần đầu tiên có vẻ sợ.' ] },
        nen: { dau: 1, loi: [
          'Tôi thắp nến sáp ong đặt lên nắp quan, cạnh bát cơm.',
          'Lửa vàng được một nhịp thở. Rồi từ gốc bấc, màu xanh lét bò lên, nuốt hết ngọn lửa.',
          'Thứ trong này đã chết. Nhưng nó không chịu nằm.' ] },
        guong: { loi: [
          'Tôi quay lưng lại quan tài, giơ gương bát quái soi qua vai.',
          { l: 'Trong gương, cỗ quan không có nắp. Và ông Đỗ đang ngồi dậy trong đó, đầu ngoẹo sang một bên, nhìn thẳng vào gáy tôi.', hien: 'xac-do', giat: 1, via: -15 },
          'Tôi quay phắt lại. Nắp quan đóng kín. Bát cơm trên nắp còn nguyên. Nhưng đôi đũa cắm trên bát đã đổ.' ] } } },
    buong: { ten: 'Buồng ông Đỗ', anh: 'v2-buong', di: ['giua'],
      ta: 'Cái giường gỗ chạm, chiếu còn lún hình người nằm. Một cái rương khoá. Lọ thuốc, cuốn lịch treo dừng ở ngày ông mất.',
      xem: [
        { ma: 'tuong', nhan: 'Soi mảng tường cạnh giường', manh: 'so-bay', co: ['vet-cao'], loi: [
          'Vôi tường bị cào tróc từng mảng, ngang tầm tay một người đang nằm.',
          'Tôi tưởng là vết cào lúc hấp hối. Rồi tôi lùi ra, và thấy nó là chữ.',
          'Một con số. Cào đi cào lại hàng trăm lần, đè lên nhau, tới bật móng: 7. 7. 7. 7.' ] },
        { ma: 'chieu', nhan: 'Lật chiếu giường', manh: 'giay', co: ['giay'], loi: [
          'Dưới chiếu, chỗ đầu nằm, có một tờ giấy gấp tư.',
          '"Giấy chuyển nhượng thửa vườn sau nhà…" Bên bán: Đỗ Khoát, điểm chỉ ngón cái, mực son đỏ.',
          'Tôi đọc ngày tháng hai lần. Giấy lập ngày hôm qua. Ông Đỗ chết từ hôm kia.' ] },
        { ma: 'ruong-khoa', nhan: 'Xem cái rương khoá', an: ['chia-ruong'], lap: 1, khong_ton: 1, loi: [
          'Rương gỗ mít, khoá đồng kiểu cũ. Trên nắp dán một lá bùa nhỏ, nét chu sa giống hệt nét của ông nội tôi.' ] },
        { ma: 'ruong', nhan: 'Mở rương bằng chìa của bà Mùi', can: ['chia-ruong'], toan: 'manh2', loi: [
          { l: 'Khoá mở. Trong rương là đồ nghề của một thầy cúng đã bỏ nghề: ấn gỗ, chuông nứt, sớ cũ.', sfx: 'cua' },
          'Dưới đáy có một xấp thư buộc dây gai. Tất cả cùng một nét chữ. Chữ ông nội tôi.',
          'Tôi rút lá trên cùng, đề ba năm trước:',
          'ong-sau|"…thằng Lặng nó đói, anh ạ. Tôi nuôi nó bằng vong người khác đã bốn chục năm. Mỗi vụ tôi trấn là một bữa cho nó. Anh là người duy nhất còn biết tên nó. Tôi chết thì nó tìm anh trước."',
          'Tôi ngồi xuống mép giường người chết. Ông nội tôi không trừ tà. Ông cho một thứ gì đó ăn.' ] },
      ],
      do: {
        gao: { dau: 1, loi: [
          'Tôi rắc gạo muối từ ngưỡng cửa buồng tới chân giường.',
          { l: 'Gạo lún xuống từng dấu một. Dấu chân trần, to, bè, của đàn ông già. Đi từ phía gian giữa vào, tới sát giường.', sfx: 'buoc-uot' },
          'Rồi những dấu khác hiện ra chồng lên, đi ngược trở ra. Nó đã rời quan tài, vào đây tìm thứ gì đó, rồi quay về nằm lại.' ] },
        chuong: { dau: 1, loi: [
          'Tôi lắc chuông giữa buồng.',
          'Câm. Tiếng chuông chết ngay trong lòng tay tôi. Thứ đó đã ở đây, và hơi của nó còn đọng.' ] } } },
    bep: { ten: 'Gian bếp', anh: 'v2-bep', di: ['san', 'gieng'],
      ta: 'Bếp ám khói, than sắp tàn. Chị Xuân ngồi vo gạo nấu cỗ cho một đám tang không còn ai đến. Trên xà có hai đốm sáng xanh.',
      xem: [
        { ma: 'meo', nhan: 'Soi hai đốm sáng trên xà', manh: 'meo', co: ['thay-meo'], loi: [
          { l: 'Một con mèo mực, lông dựng đứng, gào lên khi ánh đèn chạm tới.', sfx: 'meo' },
          'Nhưng nó không ở trên xà. Nó ở trong một cái lồng gà treo dưới xà, cửa lồng buộc ba vòng lạt.',
          'Nút lạt đã khô cứng. Cái lồng này bị buộc từ hai hôm trước, và chưa ai mở.' ] },
        { ma: 'cua-sau', nhan: 'Xem cánh cửa sau', co: ['biet-gieng'], loi: [
          'Cửa bếp hé ra vườn. Ngoài kia là giếng đá và hàng cau.',
          'Trên bậc cửa có vết bùn. Không phải chân đất hay dép. Vết đế giày tây, mới, đi ra rồi đi vào.',
          'Cả nhà này chỉ có một người đi giày tây.' ] },
      ] },
    gieng: { ten: 'Giếng sau vườn', anh: 'v2-gieng', di: ['bep'], can: ['biet-gieng'],
      ta: 'Giếng đá ong phủ rêu. Hàng cau. Cạnh tường có cái cuốc dựng, và một khoảnh đất màu khác hẳn chung quanh.',
      xem: [
        { ma: 'long-gieng', nhan: 'Nhìn xuống lòng giếng', loi: [
          'Nước giếng đen, phẳng, soi được mảnh trăng lọt qua mây.',
          'Và soi cái bóng của tôi đang cúi xuống.',
          { l: 'Và một cái bóng nữa, cao hơn, đầu ngoẹo, đứng ngay sau lưng tôi.', via: -7, sfx: 'tho', hien: 'xac-do' },
          'Sau lưng tôi không có ai. Chỉ có cái cuốc vừa đổ.' ] },
        { ma: 'dao', nhan: 'Cuốc khoảnh đất mới lấp', manh: 'tien', co: ['tien-vang'], loi: [
          'Đất tơi, mới lấp chưa quá một ngày. Ba nhát cuốc là chạm thuỷ tinh.',
          'Một cái lọ penicillin. Bên trong: một đồng tiền vàng mỏng, và nhúm gạo còn dính lại với nhau.',
          'Phạn hàm. Có người đã moi nó khỏi miệng cha mình rồi không dám giữ trong nhà.',
          { l: 'Từ nhà trên vọng xuống một tiếng gõ, rất to, như thể nó biết tôi vừa tìm thấy gì.', sfx: 'go-quan-tai' } ] },
      ],
      do: { nen: { dau: 1, loi: [
        'Tôi thắp nến đặt lên thành giếng.',
        'Lửa xanh. Xanh như lân tinh, không toả chút hơi ấm nào. Thứ đó đã ra tới tận đây.' ] } } },
  },
  nguoi: {
    'truong': { o: 'san', hoi: [
      { ma: 'chuyen', nhan: 'Ông cụ mất thế nào?', loi: [
        'truong|Tuổi già thì đi. Tám mươi rồi còn gì. Giờ Dần hôm kia.',
        'truong|Khổ cái con mèo. Vợ tôi nó trông không cẩn thận. Cậu cứ biết thế mà làm, hỏi lắm làm gì.',
        'Anh ta lại xem đồng hồ. Mặt đồng hồ vàng choé, mới.' ] },
      { ma: 'giay', nhan: 'Chìa tờ giấy bán đất', can: ['giay'], an: ['thu-toi'], loi: [
        'truong|Cậu lục đồ nhà tôi đấy à?',
        'khai|Giấy lập hôm qua. Ông cụ mất hôm kia. Ai điểm chỉ hả anh?',
        'truong|Viết nhầm ngày. Thế thôi. Cậu là thầy cúng hay công an?',
        'Anh ta giật tờ giấy. Bàn tay run, và hơi rượu phả ra nồng nặc.' ] },
      { ma: 'tien', nhan: 'Đặt cái lọ có đồng tiền vàng xuống bàn', can: ['tien-vang'], manh: 'thu-toi', co: ['thu-toi'], loi: [
        'Tôi đặt cái lọ lên mặt trống. Đồng tiền kêu một tiếng nhỏ.',
        'Anh Trường nhìn nó rất lâu. Rồi anh ngồi phịch xuống ghế nhựa.',
        'truong|Tôi nợ. Nợ nhiều. Ông cụ nhất định không bán vườn, bảo dưới đấy có thứ không được đào.',
        'truong|Đêm qua tôi tắt đèn đi cho khỏi ai thấy. Tôi cầm tay ông cụ, ấn vào hộp son. Tay cứng lắm, phải bẻ.',
        'truong|Lúc bẻ thì miệng ông cụ bật ra. Đồng tiền lăn xuống chiếu. Tiền vàng thật. Tôi… tôi nghĩ người chết thì cần gì vàng.',
        { l: 'truong|Xong tôi sợ. Tôi đem chôn. Nhưng từ lúc tôi tắt cái đèn ấy, trong quan bắt đầu gõ.', sfx: 'go-quan-tai' },
        'truong|Cậu bảo tôi phải làm gì. Cậu bảo đi.' ] },
    ] },
    'ba-mui': { o: 'giua', hoi: [
      { ma: 'chuyen', nhan: 'Bà ngồi đây từ lúc nào ạ?', loi: [
        'ba-mui|Từ lúc phường kèn nó chạy. Phải có người ngồi với ông ấy.',
        'ba-mui|Tôi không khóc được, cậu ạ. Tôi lấy ông ấy sáu mươi năm. Cái nằm trong kia… tôi ngồi cạnh mà không thấy quen.' ] },
      { ma: 'meo', nhan: 'Con mèo đen có nhảy qua người ông không?', loi: [
        'ba-mui|Con mực à. Người ta bảo thế.',
        'ba-mui|Tôi thì không thấy. Tôi chỉ nghe thằng Trường nó nói. Mà thằng Trường thì cậu biết rồi đấy.' ] },
      { ma: 'cho-mo', nhan: 'Xin bà cho cháu hé nắp quan', can: ['den-tat'], co: ['ba-cho'], loi: [
        'khai|Đèn dưới quan đã tắt một lúc lâu, bà ạ. Có người thắp lại. Cháu cần nhìn mặt ông.',
        'Bà Mùi nhìn ngọn đèn. Môi bà mím lại thành một đường.',
        'ba-mui|Tôi thắp lại đấy. Lúc gà lên chuồng tôi xuống thì thấy nó tắt ngấm, lạnh tanh.',
        'ba-mui|Cậu mở đi. Tôi là vợ, tôi cho phép.' ] },
      { ma: 'so', nhan: 'Trước lúc mất ông sợ điều gì?', can: ['vet-cao'], manh: 'loi-ba', co: ['chia-ruong'], loi: [
        'ba-mui|Cậu thấy cái tường rồi.',
        'ba-mui|Hôm nghe tin cụ Sáu mất, ông ấy ngồi lặng cả buổi. Rồi bảo: "Thằng Sáu chết rồi. Giờ thằng Bảy nó tới tìm tôi. Chỉ còn tôi biết tên nó."',
        'ba-mui|Tôi hỏi thằng Bảy nào. Ông ấy không nói. Đêm nào cũng cào tường, cào tới bật máu.',
        'ba-mui|Ông ấy không sợ chết đâu cậu. Ông ấy sợ chết rồi mà bị tìm thấy.',
        { l: 'Bà tháo sợi dây đeo cổ, đưa tôi một chiếc chìa khoá đồng còn ấm hơi người.', sfx: 'bam' },
        'ba-mui|Rương của ông ấy. Cụ Sáu gửi cái gì trong đó, tôi không dám xem.' ] },
    ] },
    'xuan': { o: 'bep', hoi: [
      { ma: 'meo', nhan: 'Chị nhốt con mèo từ bao giờ?', can: ['thay-meo'], loi: [
        'xuan|Từ lúc ông tắt thở, cậu ạ. Mẹ em bảo nhốt ngay, lệ làng nó thế.',
        'xuan|Em buộc ba vòng lạt. Nó chưa ra khỏi lồng một bước nào. Em thề.',
        'xuan|Thế mà anh Trường đi nói khắp làng là tại em trông mèo không kỹ.' ] },
      { ma: 'tay', nhan: 'Cổ tay chị bị sao vậy?', manh: 'xuan', loi: [
        'Chị kéo vội tay áo xuống. Rồi lại thôi, để yên cho tôi nhìn vết bầm tím.',
        'xuan|Đêm qua em dậy thêm dầu đèn. Em thấy gian giữa tối om. Anh Trường ở đấy một mình, đang cầm tay ông.',
        'xuan|Em hỏi sao anh tắt đèn. Anh ấy bóp tay em, bảo câm mồm.',
        'xuan|Sáng nay tinh mơ em thấy anh ấy cầm cuốc ra sau giếng. Em không dám hỏi nữa.' ] },
    ] },
  },
  su_kien: [
    { luc: 9, loi: [
      { l: 'Ba tiếng gõ nữa. To hơn lần trước.', sfx: 'go-quan-tai' },
      'Ngoài sân, cái trống cái tự rung lên một tiếng "ùm" dù không ai chạm.' ] },
    { luc: 19, loi: [
      { l: 'Có tiếng kim loại rơi xuống nền gạch.', sfx: 'bam' },
      'Con dao bài trên nắp quan đã rớt xuống đất. Nắp quan lệch đi một gang tay so với thân.',
      { l: 'Qua khe hở, tôi thấy mấy ngón tay màu sáp đang bám lấy mép gỗ.', via: -7, hien: 'xac-do' } ] },
    { luc: 29, loi: [
      { l: 'Ngọn đèn dưới quan tắt phụt. Không có gió.', sfx: 'gio' },
      { l: 'Trong bóng tối, tiếng móng tay cào gỗ kéo một đường dài từ đầu quan tới cuối quan.', via: -9, sfx: 'tho' } ] },
  ],
  het_gio: [
    { l: 'Trống canh ba ngoài điếm làng điểm ba tiếng.', sfx: 'trong' },
    { l: 'Nắp quan bật tung, đập vào tường.', sfx: 'giat' },
    'Không còn kịp tìm thêm gì nữa. Tôi phải lập đàn ngay, với những gì đang có trong tay.' ],
  dan: {
    loai: 'nhap-trang',
    ten: { cau: 'Thứ đang nằm trong xác ông Đỗ là gì?', dung: 'la', chon: [
      { ma: 'ong-do', nhan: 'Chính hồn ông Đỗ, còn oán con nên chưa đi' },
      { ma: 'meo', nhan: 'Vía con mèo đen nhập vào' },
      { ma: 'la', nhan: 'Một vong lạ mượn xác: thứ ông Đỗ gọi là "thằng Bảy"', can: ['vet-cao'] },
      { ma: 'to', nhan: 'Vong tổ tiên về trách phạt' } ] },
    nguyen: { cau: 'Cửa nào đã mở cho nó vào?', dung: 'pham-ham', chon: [
      { ma: 'meo', nhan: 'Mèo đen nhảy qua xác' },
      { ma: 'gio', nhan: 'Ông Đỗ chết phạm giờ xấu' },
      { ma: 'pham-ham', nhan: 'Đèn dưới quan bị tắt, phạn hàm bị moi khỏi miệng: cái xác bị bỏ ngỏ' },
      { ma: 'khoc', nhan: 'Nước mắt người nhà rớt lên mặt người chết' } ] },
    giai: { cau: 'Hoá giải bằng cách nào?', dung: 'tra', xau: ['dong-dinh'], chon: [
      { ma: 'dong-dinh', nhan: 'Đóng đinh, chôn ngay trong đêm như anh Trường muốn' },
      { ma: 'bua', nhan: 'Dán bùa kín bốn mặt quan, canh tới sáng' },
      { ma: 'tra', nhan: 'Trả phạn hàm vào miệng, đuổi khách ra, gọi hồn ông Đỗ về giữ xác', can: ['tien-vang'] },
      { ma: 'dot', nhan: 'Hoả thiêu cả cỗ quan' } ] },
    buoc: { dung: ['den', 'dao', 'pham', 'goi'], chon: [
      ['pham', 'Đặt phạn hàm vào miệng người chết'], ['dinh', 'Đóng đinh bốn góc quan'], ['den', 'Thắp lại đèn dưới quan'],
      ['goi', 'Gọi hồn chính chủ về giữ xác'], ['meo', 'Thả con mèo ra khỏi lồng'], ['dao', 'Đặt dao lên nắp, mũi chỉ ra cửa'] ] },
  },
  ket: {
    tot: [
      'Tôi thắp lại ngọn đèn dưới quan. Đặt con dao lên nắp, mũi chỉ ra cửa. Thứ bên trong gõ điên cuồng.',
      { l: 'Tôi mở nắp. Cái xác ngồi bật dậy, mắt trắng dã, và cái miệng há hốc đó bắt đầu cười bằng giọng một người trẻ.', hien: 'xac-do', sfx: 'giat' },
      'Anh Trường quỳ sụp. Chính tay anh, run bần bật, đặt đồng tiền vàng và nhúm gạo trở lại miệng cha mình.',
      'Hàm người chết khép lại. Tiếng cười tắt ngang như cửa đóng.',
      'khai|Đỗ Khoát. Tám mươi tuổi. Làng Vân. Nhà của ông đây, xác của ông đây. Ông về mà giữ.',
      { l: 'Cái xác từ từ nằm xuống. Trước khi mắt khép lại, tôi thề đã thấy nó nhìn tôi bằng cái nhìn biết ơn của một ông già.', sfx: 'thanh-than' },
      'Còn thứ vừa bị đuổi ra, nó không tan. Tôi cảm được nó lướt qua mình, lạnh, và đi về hướng nam. Hướng quê tôi.',
      'Sáng hôm sau đám tang cử hành đúng giờ. Phường kèn quay lại. Anh Trường xé tờ giấy bán đất trước linh cữu.',
      'Bà Mùi tiễn tôi ra đầu ngõ, dúi vào tay tôi xấp thư. "Cụ Sáu nợ ông nhà tôi một lời giải thích. Giờ cậu nợ."' ],
    vua: [
      'Tôi làm những gì mình biết. Bùa dán kín, chuông lắc tới rã tay.',
      { l: 'Tiếng gõ thưa dần rồi dứt. Cái xác nằm yên.', sfx: 'go-quan-tai' },
      'Đám tang cử hành lúc rạng sáng. Mọi người thở phào.',
      'Nhưng lúc hạ huyệt, tôi đứng gần nhất, và tôi nghe rõ: từ trong quan, một tiếng gõ. Chỉ một. Như lời chào.',
      'Tôi đã không đuổi được nó ra, cũng không gọi được ông Đỗ về. Tôi chỉ đậy nắp lại. Dưới ba thước đất làng Vân giờ có một thứ đang nằm chờ.' ],
    xau: [
      'Tôi làm theo ý anh Trường. Bốn cây đinh, tám nhát búa. Chôn ngay trong đêm, dưới mưa.',
      'Ông đã viết, gạch dưới hai lần. Tôi đã đọc. Vậy mà tôi vẫn làm.',
      { l: 'Ba hôm sau, cả làng Vân nghe tiếng gõ từ dưới đất nghĩa địa. Hôm thứ bảy thì nấm mộ sụp, rỗng không.', sfx: 'giat', hien: 'xac-do' },
      'Người ta tìm thấy anh Trường ngồi dưới đáy cái giếng sau vườn, miệng ngậm đầy gạo sống.',
      'Chôn một cái xác đang có khách là chôn cả làng.' ],
  },
});
