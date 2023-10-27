-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Máy chủ: localhost
-- Thời gian đã tạo: Th10 27, 2023 lúc 07:07 PM
-- Phiên bản máy phục vụ: 8.1.0
-- Phiên bản PHP: 8.2.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Cơ sở dữ liệu: `qlsv`
--

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `sinhvien`
--

CREATE TABLE `sinhvien` (
  `id` int NOT NULL,
  `first_name` varchar(250) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `last_name` varchar(250) COLLATE utf8mb4_general_ci DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Đang đổ dữ liệu cho bảng `sinhvien`
--

INSERT INTO `sinhvien` (`id`, `first_name`, `last_name`) VALUES
(173, 'Nguyễn Đức', 'Anh'),
(174, 'Tạ Quý', 'Cơ'),
(175, 'Nguyễn Thế', 'Cường'),
(176, 'Hà Huy', 'Đạt'),
(177, 'Lê Huỳnh Mẫn', 'Đạt'),
(178, 'Võ Thái', 'Sang'),
(179, 'Nguyễn Thế', 'Mạnh'),
(180, 'Nguyễn Thành', 'Nhân'),
(181, 'Nguyễn Trọng', 'Nhân'),
(182, 'Nguyễn Minh', 'Phát'),
(183, 'Trương Đình', 'Tuấn'),
(184, 'Phạm Thế', 'Quang'),
(185, 'Nguyễn Thị', 'Ngọc Mỹ');

--
-- Chỉ mục cho các bảng đã đổ
--

--
-- Chỉ mục cho bảng `sinhvien`
--
ALTER TABLE `sinhvien`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT cho các bảng đã đổ
--

--
-- AUTO_INCREMENT cho bảng `sinhvien`
--
ALTER TABLE `sinhvien`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=192;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
