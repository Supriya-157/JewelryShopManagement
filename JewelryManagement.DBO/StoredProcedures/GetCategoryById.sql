USE [JewelryManagement]
GO

/****** Object:  StoredProcedure [dbo].[GetCategoryById]    Script Date: 26/Jan/2024 4:46:52 PM ******/
SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO

-- =============================================
-- Author:		<Supriya>
-- Create date: <25 jan 2024>
-- Description:	<returns category by id>
-- =============================================
CREATE PROCEDURE [dbo].[GetCategoryById]
	@Id INT 
	AS
BEGIN
	SELECT * FROM Category where Id = @Id

END
GO


