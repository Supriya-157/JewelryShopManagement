USE [JewelryManagement]
GO

/****** Object:  StoredProcedure [dbo].[GetAllCategory]    Script Date: 26/Jan/2024 4:45:57 PM ******/
SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO

-- =============================================
-- Author:		<Supriya>
-- Create date: <25 jan 2024>
-- Description:	<gets all categories>
-- =============================================
CREATE PROCEDURE [dbo].[GetAllCategory]
AS
BEGIN
SELECT * from Category 
	
END
GO


