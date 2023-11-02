create database kaiz_event;
use kaiz_event;

create table app_user(
id int primary key auto_increment,
email varchar(45),
flag_deleted bit(1),
flag_online bit(1),
user_name varchar(45),
`password` varchar(255)
);
create table app_role(
id int primary key auto_increment,
flag_deleted bit(1),
`name` varchar(45),
`type` varchar(255)
);
create table user_role(
id int primary key auto_increment,
app_role_id int,
app_user_id int,
foreign key (app_role_id) references app_role(id),
foreign key (app_user_id) references app_user(id)
);
create table type_artist(
id int primary key auto_increment,
`name` varchar(255)
);
create table artist(
id int primary key auto_increment,
`name` varchar(255),
image longtext,
type_artist int ,
foreign key (type_artist) references type_artist(id)
);
create table location(
id int primary key auto_increment,
`name` varchar(45),
address varchar(255),
rent_cost  bigint,
capacity int
);
create table `area`(
id int primary key auto_increment,
`name` varchar(255),
price bigint
);
create table `event`(
id int primary key auto_increment,
`name` varchar(255),
location_id int,
date_start datetime,
date_end datetime,
`description`  varchar(255),
foreign key (location_id) references location(id)
);
create table artist_event_detail(
id int primary key auto_increment,
artist_id int,
event_id int,
foreign key (artist_id) references artist(id),
foreign key (event_id) references `event`(id)
);
create table registration(
id int primary key auto_increment,
`name` varchar (45),
app_user_id int,
foreign key (app_user_id) references app_user(id)
);
create table ticket(
id int primary key auto_increment,
event_id int,
area_id int,
registration_id int,
foreign key (event_id) references `event`(id),
foreign key (area_id) references `area`(id),
foreign key (registration_id) references registration(id)
);


