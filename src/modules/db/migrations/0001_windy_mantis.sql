CREATE TABLE `Authors` (
	`id` serial AUTO_INCREMENT NOT NULL,
	`name` varchar(256),
	CONSTRAINT `Authors_id` PRIMARY KEY(`id`)
);
--> statement-breakpoint
CREATE TABLE `Books` (
	`id` serial AUTO_INCREMENT NOT NULL,
	`name` varchar(256),
	CONSTRAINT `Books_id` PRIMARY KEY(`id`)
);
--> statement-breakpoint
CREATE TABLE `Users` (
	`id` serial AUTO_INCREMENT NOT NULL,
	`first_name` varchar(256),
	`last_name` varchar(256),
	`email` varchar(256),
	`password` varchar(256),
	`created_at` varchar(256),
	`updated_at` varchar(256),
	CONSTRAINT `Users_id` PRIMARY KEY(`id`)
);
