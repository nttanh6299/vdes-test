export interface IFilterVenue {
  label?: string;
  type: string;
  name: string;
  placeholder?: string;
  options?: { key: string; value: string | number }[];
}

export const FILTER_VENUE: IFilterVenue[] = [
  {
    type: 'text',
    name: 'keyword',
    placeholder: 'Tìm kiếm'
  },
  {
    label: 'Lọc theo khoảng giá',
    type: 'select',
    name: 'priceRange',
    options: [
      {
        key: '',
        value: 'Tất cả'
      },
      {
        key: '0-3500000',
        value: '0 - 3.500.000đ'
      },
      {
        key: '3500000-5000000',
        value: '3.500.000 - 5.000.000đ'
      },
      {
        key: '5000000',
        value: 'Trên 5 triệu'
      }
    ]
  },
  {
    label: 'Loại hình sự kiện',
    type: 'select',
    name: 'eventType',
    options: [
      {
        key: '',
        value: 'Tất cả'
      },
      {
        key: '1',
        value: 'Tiệc/Sự kiện của bé'
      },
      {
        key: '2',
        value: 'Họp nhóm/Họp mặt'
      },
      {
        key: '3',
        value: 'Hội nghị/Hội họp'
      }
    ]
  },
  {
    label: 'Loại hình sự kiện',
    type: 'checkboxes',
    name: 'spaceTypes',
    options: [
      {
        key: 'hotel',
        value: 'Khách sạn'
      },
      {
        key: 'convention-center',
        value: 'TT.HN-Tiệc cưới'
      },
      {
        key: 'restaurant',
        value: 'Nhà hàng'
      }
    ]
  },
  {
    label: 'Loại hình sự kiện',
    type: 'checkboxes',
    name: 'provinces',
    options: [
      {
        key: 'br-vt',
        value: 'Bà rịa - Vũng tàu'
      },
      {
        key: 'hcm',
        value: 'Hồ Chí Minh'
      },
      {
        key: 'hn',
        value: 'Hà Nội'
      }
    ]
  }
];
