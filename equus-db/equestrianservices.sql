CREATE DATABASE 'equestrianservices';

USE 'equestrianservices';

CREATE TABLE stablenames(
		id INT NOT NULL,
		stableName VARCHAR(100) NOT NULL,
        phoneNumber INT(15) NOT NULL,
        contactName VARCHAR(50),
        emailContact VARCHAR(100),
        websiteAddress VARCHAR(150),
        streetAddress VARCHAR(150),
        city VARCHAR(100) NOT NULL,
        county VARCHAR(50) NOT NULL,
        servicesOffered VARCHAR(200) NOT NULL
        PRIMARY KEY ( `id` ) ); /* Set ID as primary key */

    
    INSERT INTO stablenames(ID, StableName, PhoneNumber, ContactName, EmailContactAddress, WebsiteAddress, StreetAddress, ServicesOffered)
    VALUES 
		(101, Blue Moon Stables, 919.943.8918, Cara Wolf, bluemoonstablesllc@gmail.com, http://www.bluemoonstables.biz, 1120 Whippoorwill Lane, Chapel Hill, Saddleseat Summer.camps) 
		(102, Chapel Hill Equestrian, 919.724.4596, Brad, http://www.chapelhillequestrian.net/default.htm, http://www.chapelhillequestrian.net/default.net, 6614 Alexander Dr, Chapel Hill, Boarding Lessons Hunters Dressage Eventing)
        (103, Double Take Stables, 919.903.6973, Melissa Davis, horsefarmch@gmail.com, http://doubletakestables.weebly.com, , Chapel Hill, Boarding Lessons Hunters Jumpers Eventing)
        (104, Folly Farm, 919.929.2224, Micky Purcell, mickypurcell101@gmail.com, http://www.follyfarmnc.com, 1326 White Cross Rd, Chapel Hill, Boarding Lessons Training Clinics Hunters Jumpers Dressage)
        (105, Mane Event Stables, 919.391.8042, Kimberly Isley, http://maneeventstables.com/contact/, http://maneeventstables.com, 2545 Hwy 54 W, Chapel Hill, Boarding Lessons Summer.Camps Hunters Jumpers)

CREATE TABLE tackApparel(
		id INT NOT NULL,
        shopName VARCHAR(100) NOT NULL,
        phoneNumber INT(15) NOT NULL,
        emailContact VARCHAR(100),
        websiteAddress VARCHAR(150),
        streetAddress VARCHAR(150) NOT NULL, 
        city VARCHAR(100) NOT NULL,
         county VARCHAR(50) NOT NULL,
        productsOffered VARCHAR(200) NOT NULL,
        PRIMARY KEY ( `id` ) ); /* Set ID as primary key */
        
	INSERT INTO tackApparel(ID, ShopName, PhoneNumber, EmailContact, WebsiteAddress, StreetAddress, City, ProductsOffered)
        (201, The Bull Chute, 919.782.2613, , http://www.thebullchute.com, 6602 Glenwood Ave, Raleigh, Western apparel and footwear)  
        (202, Dover Saddlery, 919.596.4920, customerservice@doversaddlery.com, http://www.doversaddlery.com, 7920 Skyland Ridge Parkway, Raleigh, English-tack apparel footwear barn-supplies)
        (203, M & M Tack Shop, 919.851-0102, questions@mmtackshop.com, http://www.mmtackshop.com, 2721A Dover Farm Rd, Raleigh, English-tack apparel footwear)
        (204, Rocking B Saddle Shop, 919.732.7453, , http://www.facebook.com/pages/Rocking-B-Saddle-Shop/152433544798285, 1400 Ben Johnston Rd, Hillsborough, English-tack Western-tack)

CREATE TABLE feedSupplies(
		id INT NOT NULL,
        shopName VARCHAR(100) NOT NULL,
        phoneNumber INT(15) NOT NULL,
        emailContact VARCHAR(100),
        websiteAddress VARCHAR(150),
        streetAddress VARCHAR(150) NOT NULL,
        city VARCHAR(100) NOT NULL,
		county VARCHAR(50) NOT NULL,
        productsOffered VARCHAR(200),
        PRIMARY KEY ( `id` ) ); /* Set ID as primary key */
	
    INSERT INTO feedSuppliesTrailers (ID, ShopName, PhoneNumber, EmailContact, WebsiteAddress, StreetAddress, City, ProductsOffered)
		(301, Country Farm & Home Supply, 919.542.3353, http://chathamfarmsupply.com/contact-us, http://chathamfarmsupply.com, 101 S Small St, Pittsboro, Feed Hay Horse-supplies Tack)
        (302, Gro-Smart, 919.245.7848, gro_smart@yahoo.com, http://www.grosmart.com, 250 S Churton St, Hillsborough, Feed Hay Supplies)
        (303, Piedmont Feed & Garden Supply, 919.942.7848, http://www.piedmontfeed.com/visit, http://www.piedmontfeed.com, 4805 NC Hwy 54 West, Chapel Hill, Feed Hay Bedding Supplies)
        (304, Tractor Supply, 919.245.0522, , http://www.tractorsupply.com, 1701 NC Hwy 86 S, Hillsborough, Feed Supplies Farming-Equipment)
        (305, Southern States, null, https://www.southernstates.com, 300 N Greensboro St, Carrboro, Orange, 'Horse and Farm Supplies' Feed)

CREATE TABLE veterinarians(
		id INT NOT NULL,
        shopName VARCHAR(100) NOT NULL,
        vetName VARCHAR(100) NOT NULL,
        phoneNumber INT(15) NOT NULL,
        emailContact VARCHAR(100),
        websiteAddress VARCHAR(150),
        streetAddress VARCHAR(150) NOT NULL,
        city VARCHAR(100) NOT NULL,
		county VARCHAR(50) NOT NULL,
        servicesOffered VARCHAR(200),
        PRIMARY KEY ( `id` ) ); /* Set ID as primary key */
	 
     INSERT INTO veterinarians (ID, ShopName, VetName, PhoneNumber, EmailContact, WebsiteAddress, StreetAddress, City, ServicessOffered)
		(401, Flat River Veterinary Hospital, Dr-Lloyd-Heron Dr-John-Seal, 919.477.4210, http://www.flatriverveterinaryhospital.com/contact-us, http://www.flatriverveterinaryhospital.com, 
        325 Red Mountain Rd, Rougemont, Equine Health)
        (402, Iron Will Mobile Veterinary Services, Dr-John-Parks Dr-Chelsey-Miller, 336.223.8644, ironwillvets@gmail.com, http://www.ironwillvets.com/index.html, 2445 Vaughn Rd, Burlington, Equine & Large Animal Health)
        (403, Triangle Equine Mobile Veterinary Services, Dr Sally Vivrette, 919.460.6300, info@triangleequine.com, http://www.triangleequine.com, 103 Candy Apple Court, Cary, Equine health)
        
CREATE TABLE farriers(
		id INT NOT NULL,
        farrierName VARCHAR (100) NOT NULL,
        shopName VARCHAR(100),
        phoneNumber INT(15) NOT NULL,
        emailContact VARCHAR(100),
        websiteAddress VARCHAR(150),
        streetAddress VARCHAR(150) NOT NULL,
        city VARCHAR(100) NOT NULL,
		county VARCHAR(50) NOT NULL,
        servicesOffered VARCHAR(200),
        PRIMARY KEY ( `id` ) ); /* Set ID as primary key */
        
	INSERT INTO farriers (ID, FarrierName, ShopName, PhoneNumber, EmailContact, WebsiteAddress, StreetAddress, City, ServicessOffered)
        (501, Craig Horvath, Craigs Farrier Service, 919-995-5651, craigsfarrierservice@gmail.com, http://www.craigsfarrierservice.com/,  , Raleigh, Shoeing Trims)
        (502, Matt Flood,  , 336.437.4559,  ,  ,   , Union Ridge, Shoeing Trims)
        (503, Geoff Morrison, Shod Steed LLC, 919.264.4735, http://www.shodsteed.com/contact-us, http://www.shodsteed.com, 770 Old Dam Rd, Liberty, Shoeing Trims)
        (504, Scott Strong,  , 336.608.9989,  ,   ,    ,    , Shoeing Trims)

CREATE TABLE trailers(
		id INT NOT NULL,
        storename VARCHAR (100) NOT NULL,
        website VARCHAR (200),
        phonenumber INT (15),
        streetaddress VARCHAR (200),
        city VARCHAR (100) NOT NULL,
        county VARCHAR (50) NOT NULL,
        productsservices (200) NOT NULL,
        PRIMARY KEY ('id') ); /* Set ID as primary key */
        
	INSERT INTO trailers (ID, storename, website, phonenumber, streetaddress, city, county, productsservices)
		(601, 'C & F' Trailers and Tack, null, 252.438.5883, 4005 Raleigh Rd, Henderson, Vance, Trailers Supplies Equipment Tack)
        (602, Double D Trailers, https://www.doubledtrailers.com, null, null, Pink Hill, Lenoir, Trailers, 'Custom Trailers' Equipment)
        (603, Golden Gait Trailers, https://goldengait.com, null, 5051 Davidson Hwy, Concord, Cabarrus, Trailers 'Custom Trailers' Equipment)
        (604, Southern Alamance Trailer Co, null, 336.376.6316, 8372 Bethel Church Park Rd, Snow Camp, Alamance, Trailers Sales Service Equipment)
        (605, Woodlief Trailer Sales, http://www.goretrailers.com, null, 5117 Purnell Rd., Wake Forest, Wake, 'Livestock and Horse Trailers' Equipment)