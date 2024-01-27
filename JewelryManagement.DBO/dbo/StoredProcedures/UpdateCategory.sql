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


