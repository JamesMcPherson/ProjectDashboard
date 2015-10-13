/****** Object:  Table [dbo].[Project]    Script Date: 10/13/2015 7:37:19 AM ******/
IF(OBJECT_ID('Project', 'U') IS NULL)
 BEGIN
	CREATE TABLE [dbo].[Project](
		[ProjectId] [int] IDENTITY(1,1) NOT NULL,
		[JDEProjectId] [varchar](50) NOT NULL,
		[ProjectName] [varchar](100) NOT NULL,
		[Address1] [varchar](100) NULL,
		[Address2] [varchar](100) NULL,
		[City] [varchar](100) NULL,
		[County] [varchar](100) NULL,
		[PostalCode] [varchar](20) NULL,
		[Region] [varchar](50) NULL,
		[StateProvince] [varchar](50) NULL,
		[Country] [varchar](50) NULL,
		[OwnerType] [varchar](10) NULL,
		[FacilityType] [varchar](50) NULL,
		[DeliveryMethod] [varchar](50) NULL,
		[Status] [varchar](20) NULL,
		[Division] [varchar](20) NULL,
		[CreatedDateTime] [datetimeoffset](7) NULL,
		[CreatedBy] [varchar](50) NOT NULL,
		[UpdatedDateTime] [datetimeoffset](7) NULL,
		[UpdatedBy] [varchar](50) NOT NULL,
	 CONSTRAINT [PK_Project] PRIMARY KEY CLUSTERED 
	(
		[ProjectId] ASC
	)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON)
	)

END

IF NOT EXISTS (
    select *
      from sys.all_columns c
      join sys.tables t on t.object_id = c.object_id
      join sys.schemas s on s.schema_id = t.schema_id
      join sys.default_constraints d on c.default_object_id = d.object_id
    where t.name = 'Project'
      and c.name = 'CreatedDateTime'
      and s.name = 'dbo')
  BEGIN
	ALTER TABLE [dbo].[Project] ADD  CONSTRAINT [DF_Project_CreatedDateTime]  DEFAULT (getdate()) FOR [CreatedDateTime]
  END