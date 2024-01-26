USE [JewelryManagement]
GO

/****** Object:  StoredProcedure [dbo].[UpdateCategory]    Script Date: 26/Jan/2024 4:47:52 PM ******/
SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO

-- =============================================
-- Author:		<Supriya>
-- Create date: <25 jan 2024>
-- Description:	<Updates the isActive status>
-- =============================================
CREATE PROCEDURE [dbo].[UpdateCategory]
@Id INT,
@IsActive bit
AS
BEGIN

update Category 
SET IsActive = @IsActive
WHERE Id = @Id
END
GO


