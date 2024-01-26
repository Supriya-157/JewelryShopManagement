USE [JewelryManagement]
GO

/****** Object:  StoredProcedure [dbo].[DeleteCategory]    Script Date: 26/Jan/2024 4:45:02 PM ******/
SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO

-- =============================================
-- Author:		<Supriya>
-- Create date: <25 jan 2024>
-- Description:	<Deletes category by id>
-- =============================================
CREATE PROCEDURE [dbo].[DeleteCategory]
@Id INT

AS
BEGIN
DELETE FROM Category
WHERE Id = @Id

END
GO


