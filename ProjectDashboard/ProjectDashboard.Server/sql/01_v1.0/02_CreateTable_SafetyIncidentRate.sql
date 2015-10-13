IF(OBJECT_ID('SafetyIncidentRate', 'U') IS NULL)
 BEGIN
	CREATE TABLE [dbo].[SafetyIncidentRate](
		[SafetyIncidentRateId] [int] IDENTITY(1,1) NOT NULL,
		[ProjectId] [int] NOT NULL,
		[PeriodMonth] [int] NOT NULL,
		[PeriodYear] [int] NOT NULL,
		[PeriodBeginDateTime]  AS (CONVERT([datetime],(((CONVERT([varchar],[PeriodYear],0)+'-')+CONVERT([varchar],[PeriodMonth],0))+'-')+'1',0)),
		[PeriodEndDateTime]  AS (dateadd(second,(-1),dateadd(month,datediff(month,(0),CONVERT([datetime],(((CONVERT([varchar],[PeriodYear],0)+'-')+CONVERT([varchar],[PeriodMonth],0))+'-')+'1',0))+(1),(0)))),
		[RecordableIncidents] [int] NULL,
		[LossTime] [int] NULL,
		[ManHours] [int] NULL,
		[CreatedDateTime] [datetimeoffset](7) NULL,
		[CreatedBy] [varchar](50) NOT NULL,
		[UpdatedDateTime] [datetimeoffset](7) NULL,
		[UpdatedBy] [varchar](50) NOT NULL,
		[RIR]  AS (([RecordableIncidents]*(200000))/[ManHours]),
		[LTIR]  AS (([LossTime]*(200000))/[ManHours]),
	 CONSTRAINT [PK_SafetyIncidentRate] PRIMARY KEY CLUSTERED 
	(
		[SafetyIncidentRateId] ASC
	)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON),
	 CONSTRAINT [IX_SafetyIncidentRate_ProjectId_Period] UNIQUE NONCLUSTERED 
	(
		[ProjectId] ASC,
		[PeriodYear] ASC,
		[PeriodMonth] ASC
	)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON)
	)
END

IF NOT EXISTS (
    select *
      from sys.all_columns c
      join sys.tables t on t.object_id = c.object_id
      join sys.schemas s on s.schema_id = t.schema_id
      join sys.default_constraints d on c.default_object_id = d.object_id
    where t.name = 'SafetyIncidentRate'
      and c.name = 'CreatedDateTime'
      and s.name = 'dbo')
  BEGIN
	ALTER TABLE [dbo].[SafetyIncidentRate] ADD  CONSTRAINT [DF_SafetyIncidentRate_CreatedDateTime]  DEFAULT (getdate()) FOR [CreatedDateTime]
  END