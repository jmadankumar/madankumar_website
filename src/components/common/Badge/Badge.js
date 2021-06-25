import React from 'react';
import styled from '@emotion/styled';
import cx from 'classnames';

const BAG_COLORS = [
  'magenta',
  'red',
  'volcano',
  'orange',
  'gold',
  'lime',
  'green',
  'cyan',
  'blue',
  'geekblue',
  'purple',
];
const BadgeStyle = styled.span`
  &.badge-light {
    padding: 5px 12px;
    background: rgb(216, 236, 253);
    font-weight: 400;
  }
  &.badge-magenta {
    color: #eb2f96;
    background: #fff0f6;
    border-color: #ffadd2;
  }
  &.badge-red {
    color: #f5222d;
    background: #fff1f0;
    border-color: #ffa39e;
  }
  &.badge-volcano {
    color: #fa541c;
    background: #fff2e8;
    border-color: #ffbb96;
  }
  &.badge-orange {
    color: #fa8c16;
    background: #fff7e6;
    border-color: #ffd591;
  }
  &.badge-gold {
    color: #faad14;
    background: #fffbe6;
    border-color: #ffe58f;
  }
  &.badge-lime {
    color: #a0d911;
    background: #fcffe6;
    border-color: #eaff8f;
  }
  &.badge-green {
    color: #52c41a;
    background: #f6ffed;
    border-color: #b7eb8f;
  }
  &.badge-cyan {
    color: #13c2c2;
    background: #e6fffb;
    border-color: #87e8de;
  }
  &.badge-blue {
    color: #1890ff;
    background: #e6f7ff;
    border-color: #91d5ff;
  }
  &.badge-geekblue {
    color: #2f54eb;
    background: #f0f5ff;
    border-color: #adc6ff;
  }
  &.badge-purple {
    color: #722ed1;
    background: #f9f0ff;
    border-color: #d3adf7;
  }
`;
const Badge = ({ size, color, children }) => {
  let _color =
    BAG_COLORS[Math.floor(Math.random() * BAG_COLORS.length)] || color;
  return (
    <BadgeStyle
      className={cx('text-base px-4 p-1 mr-2 mb-2', `badge-${_color}`)}
    >
      {children}
    </BadgeStyle>
  );
};

export default Badge;
