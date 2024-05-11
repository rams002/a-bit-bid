-- it's not in only one ejecutation (in order)
use abitbid;

-- table Users

create table Users (
Username varchar(20) primary key,
Password char(60)
);


-- table Posts

create table Posts( 
idPost int auto_increment primary key, 
Username varchar(20),
foreign key (Username) references Users(Username),
Likes int,
Comments int,
Saves int,
Views int,
Date date
);


-- table Season

create table Season(
Season varchar(9) primary key,
Standing int (2),
matchPlayed int(2),
Goals int,
goalsPerMatch double,
goalsReceived int,
Cards int
);


-- table Matches

create table Matches(
matchId int auto_increment primary key,
visitClub varchar(20),
localClub varchar (20),
Scheudle varchar (20)
);

-- table Club

create table Club(
Name varchar(20) primary key,
dateOfCreation date,
Stadium varchar(50),
President varchar(20),
Country varchar(20),
Standing int(3),
leagueName varchar(20),
foreign key(leagueName) references league(leagueName)
);

-- table Players

create table Players(
playerName varchar(50) primary key,
totalMatches int,
Position varchar(10),
dateOfBorn date,
placeOfBorn varchar(50),
ELO int,
Name varchar(20),
foreign key(Name) references Club(Name),
Country varchar (20)
);

-- table Statistics Match

create table StatisticsMatch(
Possession int,
Outsides int,
Cornets int,
Shoots int,
Saves int,
Tackles int,
Passes int, 
yellowCards int,
redCards int,
matchId int primary key,
foreign key(matchId) references Matches(matchId)
);


-- table League

create table League(
leagueName varchar(20) primary key,
Standing int,
Points int,
matchPlayed int,
Wins int,
Draft int,
Losses int,
GoalsPositive int,
GoalsNegative int,
GoalDifference varchar(5),
Season varchar(9),
foreign key(Season) references Season(Season)
);

-- table Bets

create table Bets(
idBets int auto_increment primary key,
matchId int,
foreign key(matchId) references Matches(matchId),
Fee double,
Username varchar(20),
foreign key(Username) references Users(Username)
);

